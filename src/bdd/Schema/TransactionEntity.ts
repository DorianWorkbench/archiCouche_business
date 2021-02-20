import mongoose, { Schema, Document } from "mongoose";

const TransactionSchema: Schema = new mongoose.Schema({
  name: String,
  amount: Number,
  user: { type: mongoose.Types.ObjectId, ref: "User" },
  room: { type: mongoose.Types.ObjectId, ref: "Room" },
});

type ITransaction = {
  name: string;
  amount: number;
  user: { type: mongoose.Types.ObjectId; ref: "User" };
  room: { type: mongoose.Types.ObjectId; ref: "Room" };
};

export default mongoose.model<ITransaction & Document>(
  "Transaction",
  TransactionSchema
);
