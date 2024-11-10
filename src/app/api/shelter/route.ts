import type { NextApiRequest, NextApiResponse } from "next";
import { mongooseConnect } from "../../../lib/mongoose";
import { Shelter } from "../../../models/Shelter";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await mongooseConnect();

  const { method } = req;

  try {
    switch (method) {
      case "GET": {
        const shelters = await Shelter.find({});
        res.status(200).json(shelters);
        break;
      }
      case "POST": {
        const shelter = await Shelter.create(req.body);
        res.status(201).json(shelter);
        break;
      }
      case "PUT": {
        const { id } = req.query;
        const updatedShelter = await Shelter.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        if (!updatedShelter)
          return res.status(404).json({ message: "Shelter not found" });
        res.status(200).json(updatedShelter);
        break;
      }
      case "DELETE": {
        const { id } = req.query;
        const deletedShelter = await Shelter.findByIdAndDelete(id);
        if (!deletedShelter)
          return res.status(404).json({ message: "Shelter not found" });
        res.status(200).json({ message: "Shelter deleted" });
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
