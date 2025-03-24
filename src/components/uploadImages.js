import cloudinary from "./cloudinaryConfig.js";
import fs from "fs";
import path from "path";

// Folder where images are stored
const imagesFolder = "./src/img/bridealbum002";
//to get new images creat a new file in img folder with new images and give the folder name above instead of porfolio2


// input the follwing cmd in the terminal to get new URL's : node src/components/uploadImages.js
// copy and paste the new URL's from the terminal to the required file or page

// Read all image files in the folder
const imageFiles = fs.readdirSync(imagesFolder);

// Function to upload multiple images
async function uploadMultipleImages() {
  try {
    const uploadPromises = imageFiles.map((file) =>
      cloudinary.uploader.upload(path.join(imagesFolder, file), {
        folder: "my-images1", // Optional: Store images in a Cloudinary folder
      })
    );

    const uploadedImages = await Promise.all(uploadPromises);

    // Get and display image URLs
    const imageUrls = uploadedImages.map((img) => img.secure_url);
    console.log("Uploaded Image URLs:", imageUrls);

    return imageUrls; // You can save these URLs in a database if needed
  } catch (error) {
    console.error("Upload failed:", error);
  }
}

// Run the upload function
uploadMultipleImages();
