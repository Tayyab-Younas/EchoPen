import mongoose, { connect } from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed");
    console.log(`Error : ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
