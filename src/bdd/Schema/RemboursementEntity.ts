import mongoose, { Schema, Document } from "mongoose";

const RemboursementSchema: Schema = new mongoose.Schema({
  name: String,
  amount: Number,
  idRoom: { type: mongoose.Types.ObjectId, ref: "Room" },
});

type IRemboursement = {
  name: string;
  amount: number;
  idRoom: { type: mongoose.Types.ObjectId; ref: "Room" };
};

export default mongoose.model<IRemboursement & Document>(
  "Refund",
  RemboursementSchema
);
