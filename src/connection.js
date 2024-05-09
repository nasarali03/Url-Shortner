import mongoose from "mongoose";

async function connectToMongo() {
  try {
    return await mongoose.connect(process.env.DB_URI);
  } catch (error) {
    console.log("Error during connection:", error);
    process.exit(1);
  }
}

export default connectToMongo;
