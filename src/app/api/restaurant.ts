import type { NextApiRequest, NextApiResponse } from "next";
import { mongooseConnect } from "../../lib/mongoose";
import { Restaurant } from "../../models/Restaurant";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await mongooseConnect();

  const { method } = req;

  try {
    switch (method) {
      case "GET": {
        const restaurants = await Restaurant.find({});
        res.status(200).json(restaurants);
        break;
      }
      case "POST": {
        const restaurant = await Restaurant.create(req.body);
        res.status(201).json(restaurant);
        break;
      }
      case "PUT": {
        const { id } = req.query;
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(
          id,
          req.body,
          { new: true }
        );
        if (!updatedRestaurant)
          return res.status(404).json({ message: "Restaurant not found" });
        res.status(200).json(updatedRestaurant);
        break;
      }
      case "DELETE": {
        const { id } = req.query;
        const deletedRestaurant = await Restaurant.findByIdAndDelete(id);
        if (!deletedRestaurant)
          return res.status(404).json({ message: "Restaurant not found" });
        res.status(200).json({ message: "Restaurant deleted" });
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
