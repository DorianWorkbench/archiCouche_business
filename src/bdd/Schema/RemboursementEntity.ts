import mongoose from "mongoose";

const RemboursementSchema = new mongoose.Schema({
  name: Number,
  amount: Number,
  idRoom: { type: mongoose.Types.ObjectId, ref: "Room" },
});

export default mongoose.model("Refund", RemboursementSchema);
