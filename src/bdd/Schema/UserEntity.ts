import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  pseudo: String,
  name: String,
  surname: String,
  rooms: [{ type: mongoose.Types.ObjectId, ref: "room" }],
});

export default mongoose.model("user", UserSchema);
