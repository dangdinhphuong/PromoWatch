import mongoose from "mongoose";

const { Schema } = mongoose;

const PromotionTimeSchema = new Schema(
  {
    start: { type: String, default: null },
    end: { type: String, default: null },
  },
  { _id: false }
);

const PromotionSchema = new Schema(
  {
    key: { type: String, required: true },
    id: { type: String, default: undefined },
    code: { type: String, default: null },
    name: { type: String, default: null },
    company: { type: String, default: null },
    time: { type: PromotionTimeSchema, default: null },
    timeStartDate: { type: Date, default: null },
    timeEndDate: { type: Date, default: null },
    location: { type: String, default: null },
    productType: { type: String, default: null },
    discountPercent: { type: Number, default: null },
    promotionMethod: { type: String, default: null },
    type: { type: String, default: null },
    agencyId: { type: String, default: null },
    total: { type: Number, default: null },
    rowStt: { type: Number, default: null },
    source: { type: String, required: true },
    sourceUrl: { type: String, default: null },
    crawledAt: { type: Date, default: null },
    crawledAtDate: { type: Date, default: null },
    meta: { type: Schema.Types.Mixed, default: null },
  },
  {
    collection: "promotions",
    timestamps: true,
    versionKey: false,
  }
);

PromotionSchema.index(
  { key: 1 },
  { unique: true, sparse: true, name: "promotions_key_unique" }
);

export const Promotion =
  mongoose.models.Promotion || mongoose.model("Promotion", PromotionSchema);
