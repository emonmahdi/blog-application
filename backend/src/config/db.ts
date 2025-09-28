import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGO_URI || "mongodb://localhost:27017/blogdb";
  console.log(uri);
  await mongoose.connect(uri);
  console.log("MongoDB connected");
};

export default connectDB;
