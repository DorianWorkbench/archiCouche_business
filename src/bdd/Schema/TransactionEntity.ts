import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  user: { type: mongoose.Types.ObjectId, ref: "User" },
  room: { type: mongoose.Types.ObjectId, ref: "Room" },
});

export default mongoose.model("Transaction", TransactionSchema);
