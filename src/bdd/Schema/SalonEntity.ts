import mongoose, { Schema, Document } from "mongoose";

const SalonEntity: Schema = new mongoose.Schema({
  name: String,
  users: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  transactions: [{ type: mongoose.Types.ObjectId, ref: "Transaction" }],
});

type IRoom = {
  name: string;
  users: [string];
  transactions: { type: mongoose.Types.ObjectId; ref: "Transaction" };
};
export default mongoose.model<IRoom & Document>("Room", SalonEntity);
