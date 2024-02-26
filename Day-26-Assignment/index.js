// 26. Problem: Aggregation Pipeline for Product Stats

// Problem Statement: Create an aggregation pipeline to calculate statistics for
// products in MongoDB.Implement a function to execute the pipeline and return aggregated
// results like the total number of products, the average price, and the highest
// quantity.

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Databse Connection
const connectDB = () => {
  mongoose.connect("mongodb://127.0.0.1/testDatabase");

  const db = mongoose.connection;
  db.on("error", (error) => console.error("MongoDB connection error:", error));
  db.once("open", () => console.log("Connected to MongoDB"));
};

connectDB();

//  Product Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Product name is Required"],
  },
  price: {
    type: Number,
    validate: {
      validator: (price) => price >= 0,
      message: (event) => "Negative number is not allowed",
    },
  },
  quantity: {
    type: Number,
    validate: {
      validator: (quantity) => quantity >= 0,
      message: (event) => "Negative number is not allowed",
    },
  },
});

const Product = mongoose.model("Product", productSchema);

async function getProductStatistics() {
  try {
    const products = await Product.aggregate([
      {
        $group: {
          _id: null,
          totalProducts: { $sum: 1 },
          averagePrice: { $avg: "$price" },
          highestQuantity: { $max: "$quantity" },
        },
      },
    ]);
    return products;
  } catch (error) {
    console.log(error);
  }
}

// routes
app.get("/api/product", async (req, res) => {
  try {
    const products = await getProductStatistics();

    res.status(201).json({ succes: true, Products: products[0] });
  } catch (error) {
    res.status(503).json({ success: false, error: "Internal Sever Error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is listen at port ${PORT}`);
});
