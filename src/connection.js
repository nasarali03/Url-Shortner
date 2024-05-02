import mongoose from "mongoose";

async function connectToMongo(url) {
  try {
    return await mongoose.connect(url);
  } catch (error) {
    console.log("Error during connection:", error);
  }
}

export default connectToMongo;
