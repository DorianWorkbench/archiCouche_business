import mongoose, { Schema } from "mongoose";

const SalonEntity: Schema = new mongoose.Schema({
  name: String,
  user: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  transaction: [{ type: mongoose.Types.ObjectId, ref: "Transaction" }],
});

export default mongoose.model("Room", SalonEntity);
