import mongoose from "mongoose";
import { config } from "../config/index.js";

let connectPromise = null;
let activeLogger = console;

mongoose.set("strictQuery", true);

function getReadyStateLabel(state) {
  switch (state) {
    case 0:
      return "disconnected";
    case 1:
      return "connected";
    case 2:
      return "connecting";
    case 3:
      return "disconnecting";
    default:
      return "unknown";
  }
}

export function getMongoReadyState() {
  return {
    state: mongoose.connection.readyState,
    label: getReadyStateLabel(mongoose.connection.readyState),
  };
}

export async function connectMongo({ logger = console } = {}) {
  activeLogger = logger || console;

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (connectPromise) {
    return connectPromise;
  }

  const uri = config.mongo?.uri;
  if (!uri) {
    const error = new Error("MONGO_URI is not set.");
    error.code = "MISSING_MONGO_URI";
    throw error;
  }

  connectPromise = mongoose
    .connect(uri, {
      dbName: config.mongo?.dbName || undefined,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    })
    .then(() => mongoose.connection)
    .catch((error) => {
      connectPromise = null;
      throw error;
    });

  mongoose.connection.off("error", onMongoError);
  mongoose.connection.on("error", onMongoError);

  return connectPromise;
}

function onMongoError(error) {
  activeLogger.error(`[mongo] connection error: ${error?.message || String(error)}`);
}

export async function disconnectMongo() {
  connectPromise = null;
  if (mongoose.connection.readyState === 0) {
    return;
  }
  await mongoose.disconnect();
}

