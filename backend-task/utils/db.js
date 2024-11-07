import mongoose from "mongoose";

const connectDB = async (mongo_uri) => {
  try {
    const connection = mongoose.connection.readyState;

    if (connection === 1) {
      console.log("Already connected to MongoDB.");
      return;
    }

    if (connection === 2) {
      console.log("MongoDB is connecting.");
      return;
    }

    await mongoose.connect(mongo_uri, {
      dbName: "illpeoples-music",
      bufferCommands: true,
    });

    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    throw new Error("MongoDB connection failed");
  }
};

export default connectDB;
