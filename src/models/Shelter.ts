// models/Shelter.ts

import mongoose, { Schema, Document, model, models } from "mongoose";

interface ShelterDocument extends Document {
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
  foodRequirements: {
    daily: number;
    weekly: number;
  };
  donationHistory: Array<{
    donationId: mongoose.Types.ObjectId;
    date: Date;
    amount: number;
  }>;
  totalReceived: number;
}

const ShelterSchema = new Schema<ShelterDocument>({
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
  foodRequirements: {
    daily: { type: Number, default: 0 },
    weekly: { type: Number, default: 0 },
  },
  donationHistory: [
    {
      donationId: { type: Schema.Types.ObjectId, ref: "Donation" },
      date: Date,
      amount: Number,
    },
  ],
  totalReceived: { type: Number, default: 0 },
});

export const Shelter = models.Shelter || model<ShelterDocument>("Shelter", ShelterSchema);
