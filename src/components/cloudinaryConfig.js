import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import path from "path";

// Load the .env file from the correct location
dotenv.config({ path: path.resolve(process.cwd(), ".env") });
// Configure Cloudinary
cloudinary.config({
// go to .env file to change the below with your own account detail    
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
