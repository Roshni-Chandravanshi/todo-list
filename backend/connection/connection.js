const mongoose = require("mongoose");

const connectionString = 'mongodb://localhost:27017/ToDo';

async function connectToMongoDB() {
  try {
    await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}


connectToMongoDB();
