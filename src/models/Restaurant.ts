import mongoose, { Schema, Document, model, models } from "mongoose";

interface RestaurantDocument extends Document {
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    coordinates: {
      type: string;
      coordinates: [number, number];
    };
  };
  contactInfo: {
    email: string;
    phone: string;
  };
  donationHistory: Array<{
    donationId: mongoose.Types.ObjectId;
    date: Date;
    amount: number;
  }>;
  totalDonations: number;
}

const RestaurantSchema = new Schema<RestaurantDocument>({
  name: { type: String, required: true },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    coordinates: {
      type: { type: String, default: "Point" },
      coordinates: [Number],
    },
  },
  contactInfo: {
    email: String,
    phone: String,
  },
  donationHistory: [
    {
      donationId: { type: Schema.Types.ObjectId, ref: "Donation" },
      date: Date,
      amount: Number,
    },
  ],
  totalDonations: { type: Number, default: 0 },
});

export const Restaurant = models.Restaurant || model<RestaurantDocument>("Restaurant", RestaurantSchema);
