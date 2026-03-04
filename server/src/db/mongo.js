import { MongoClient } from "mongodb";
import { config } from "../config/index.js";

let client = null;
let clientPromise = null;

export async function getMongoClient() {
  if (client) {
    return client;
  }

  if (!clientPromise) {
    const uri = config.mongo?.uri;
    if (!uri) {
      const error = new Error("MONGO_URI is not set.");
      error.code = "MISSING_MONGO_URI";
      throw error;
    }

    const nextClient = new MongoClient(uri, {
      serverSelectionTimeoutMS: 5000,
    });

    clientPromise = nextClient
      .connect()
      .then(() => {
        client = nextClient;
        return client;
      })
      .catch((error) => {
        clientPromise = null;
        throw error;
      });
  }

  return clientPromise;
}

export async function getMongoDb(dbName = config.mongo?.dbName) {
  const activeClient = await getMongoClient();
  const resolvedName = dbName || "webtoolkit";
  return activeClient.db(resolvedName);
}

export async function closeMongoClient() {
  if (client) {
    await client.close();
    client = null;
  }
  clientPromise = null;
}

