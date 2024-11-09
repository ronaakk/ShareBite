
import type { NextApiRequest, NextApiResponse } from "next";
import { mongooseConnect } from "../../lib/mongoose";
import {Donation} from "../../models/Donation";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await mongooseConnect();
  
  const { method } = req;

  try {
    switch (method) {
      case "GET": {
        const donations = await Donation.find({});
        res.status(200).json(donations);
        break;
      }
      case "POST": {
        const donation = await Donation.create(req.body);
        res.status(201).json(donation);
        break;
      }
      case "PUT": {
        const { id } = req.query;
        const updatedDonation = await Donation.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedDonation) return res.status(404).json({ message: "Donation not found" });
        res.status(200).json(updatedDonation);
        break;
      }
      case "DELETE": {
        const { id } = req.query;
        const deletedDonation = await Donation.findByIdAndDelete(id);
        if (!deletedDonation) return res.status(404).json({ message: "Donation not found" });
        res.status(200).json({ message: "Donation deleted" });
        break;
      }
      default:
        res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error("An error occurred:", error);
        res.status(500).json({ error: "Internal Server Error" });
  }
}
