
import type { NextApiRequest, NextApiResponse } from "next";
import {mongooseConnect} from "../../lib/mongoose";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await mongooseConnect();
    res.status(200).json({ message: "Database connected successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to connect to the database" });
  }
}
