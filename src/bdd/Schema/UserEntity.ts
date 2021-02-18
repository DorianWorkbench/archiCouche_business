import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  pseudo: String,
  name: String,
  surname: { type: String, required: true },
  rooms: [{ type: mongoose.Types.ObjectId, ref: "Room" }],
});

export default mongoose.model("User", UserSchema);
