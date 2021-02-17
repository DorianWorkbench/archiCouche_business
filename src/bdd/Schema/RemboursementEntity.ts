import mongoose from "mongoose";

const RemboursementSchema = new mongoose.Schema({
  name: Number,
  amount: Number,
  idRoom: { type: mongoose.Types.ObjectId, ref: "room" },
});

export default mongoose.model("refund", RemboursementSchema);
