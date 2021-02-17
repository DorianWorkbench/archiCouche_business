import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  user: { type: mongoose.Types.ObjectId, ref: "user" },
  room: { type: mongoose.Types.ObjectId, ref: "room" },
});

export default mongoose.model("transaction", TransactionSchema);
