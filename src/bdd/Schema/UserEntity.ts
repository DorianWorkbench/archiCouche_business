import mongoose, { Document, Schema } from "mongoose";

const UserSchema: Schema = new mongoose.Schema({
  pseudo: String,
  name: String,
  surname: { type: String, required: true },
  rooms: [{ type: mongoose.Types.ObjectId, ref: "Room" }],
});

type IUser = {
  pseudo: string;
  name: string;
  surname: string;
  rooms: { type: mongoose.Types.ObjectId; ref: "Room" };
};

export default mongoose.model<IUser & Document>("User", UserSchema);
