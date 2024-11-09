import mongoose, { Schema, Document, model, models } from "mongoose";

interface DonationDocument extends Document {
  restaurantId: mongoose.Types.ObjectId;
  shelterId: mongoose.Types.ObjectId;
  date: Date;
  amount: number;
  status: "Pending" | "Completed";
  deliveryType: "Pickup" | "Delivery";
  notes?: string;
}

const DonationSchema = new Schema<DonationDocument>({
  restaurantId: { type: Schema.Types.ObjectId, ref: "Restaurant", required: true },
  shelterId: { type: Schema.Types.ObjectId, ref: "Shelter", required: true },
  date: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
  status: { type: String, enum: ["Pending", "Completed"], default: "Pending" },
  deliveryType: { type: String, enum: ["Pickup", "Delivery"], default: "Pickup" },
  notes: String,
});

export const Donation = models.Donation || model<DonationDocument>("Donation", DonationSchema);
