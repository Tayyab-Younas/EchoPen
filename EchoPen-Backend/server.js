import dotenv from "dotenv";
import connectDB from "./config/DataBase.js";

dotenv.config({ path: "./.env" });

connectDB();

const PORT = process.env.PORT || 5000;

console.log(`Server is running on port ${PORT}`);
