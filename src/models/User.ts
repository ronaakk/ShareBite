// models/User.ts

import mongoose, { Schema, Document, model, models } from "mongoose";

interface UserDocument extends Document {
  auth0Id: string; // Unique ID from Auth0
  role: "Restaurant" | "Shelter" | "Admin";
  referenceId: mongoose.Types.ObjectId; // Links to Restaurant or Shelter
  email: string; // Store email for easy access and queries
  preferences?: Record<string, any>; // Optional: store additional user preferences
}

const UserSchema = new Schema<UserDocument>({
  auth0Id: { type: String, required: true, unique: true }, // Auth0's unique identifier
  role: { type: String, enum: ["Restaurant", "Shelter", "Admin"], required: true },
  referenceId: { type: Schema.Types.ObjectId, required: true }, // Links to Restaurant or Shelter
  email: { type: String, required: true }, // Store email for convenience
  preferences: { type: Map, of: Schema.Types.Mixed }, // Additional preferences if needed
});

export const User = models.User || model<UserDocument>("User", UserSchema);
