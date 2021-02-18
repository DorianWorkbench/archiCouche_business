import mongoose from "mongoose";

export default mongoose.connect(
  "mongodb://admin:password@localhost:27017/buisnessArchiCouche?authSource=admin",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
