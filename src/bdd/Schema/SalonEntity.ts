import mongoose, { Schema } from "mongoose";

const SalonEntity: Schema = new mongoose.Schema({
  name: String,
  user: [{ type: mongoose.Types.ObjectId, ref: "user" }],
  transaction: [{ type: mongoose.Types.ObjectId, ref: "transaction" }],
});

export default mongoose.model("room", SalonEntity);
