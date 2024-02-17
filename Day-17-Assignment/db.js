const mongoose = require("mongoose");

// Connect Database

const connectDB = () => {
  mongoose.connect("mongodb://127.0.0.1/testDatabase");

  const db = mongoose.connection;

  db.on("error", (error) => console.error("MongoDB connection error:", error));
  db.once("open", () => console.log("Connected to MongoDB"));
};

// Create Schema

const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    unique: true,
  },
});

const User = mongoose.model("User", userSchema);

//  Add User Function

async function addUserToDatabase(userData) {
  try {
    const { username, email } = userData;

    if (!username || !email) throw new Error("All fields are required");

    const user = new User({ username, email });

    await user.save();

    console.log({ success: true, message: "User Added Successfully", user });
  } catch (error) {
    console.error({
      success: false,
      message: "Failed to add User",
      error: error,
    });
  }
}

module.exports = { connectDB, addUserToDatabase };
