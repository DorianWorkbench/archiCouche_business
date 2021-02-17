import mongoose from "mongoose";

const connexion = mongoose.connect(
  "mongodb://admin:test@localhost:27017/projet-business?authSource=admin",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

export default connexion;
