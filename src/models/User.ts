// models/User.ts

import mongoose, { Schema, Document, model, models } from "mongoose";

interface UserDocument extends Document {
  auth0Id: string; 
  role: "Restaurant" | "Shelter" | "";
  email: string; 
  name: string; 
}

const UserSchema = new Schema<UserDocument>({
  auth0Id: { type: String, required: true, unique: true },
  role: { type: String, enum: ["Restaurant", "Shelter", ""], required: true, default: "" },
  email: { type: String, required: true }, 
  name: { type: String, required: true }, 
});

export const User = models.User || model<UserDocument>("User", UserSchema);
