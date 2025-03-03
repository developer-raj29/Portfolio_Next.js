import mongoose from "mongoose";

// import enviroment variables
require("dotenv").config();

const connectDB = async () => {
  // import DB URL
  await mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(`MongoDB Connected Successfully...${mongoose.connection.host}`)
    .catch((error) => {
      mongoose.disconnect();
      console.error(error);
      console.log("Failed to Connected DataBase...");
    });
  });
};

export default connectDB;
