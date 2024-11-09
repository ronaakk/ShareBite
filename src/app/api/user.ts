import type { NextApiRequest, NextApiResponse } from "next";
import { mongooseConnect } from "../../lib/mongoose";
import { User } from "../../models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await mongooseConnect();

  const { method } = req;

  try {
    switch (method) {
      case "GET": {
        const users = await User.find({});
        res.status(200).json(users);
        break;
      }
      case "POST": {
        const user = await User.create(req.body);
        res.status(201).json(user);
        break;
      }
      case "PUT": {
        const { id } = req.query;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        if (!updatedUser)
          return res.status(404).json({ message: "User not found" });
        res.status(200).json(updatedUser);
        break;
      }
      case "DELETE": {
        const { id } = req.query;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser)
          return res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "User deleted" });
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
