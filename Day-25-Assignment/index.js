// 25. Problem: Mongoose Indexing

// Problem Statement: Implement indexing on the "name" field of the "Product" collection to optimize
// query performance.Write a function to create the index.

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

async function createProductNameIndex() {
  try {
    const res = await Product.collection.createIndex({ name: 1 });

    console.log(`Index on "name" field created successfully`);
  } catch (error) {
    console.log(`Failed to create index: ${error}`);
  }
}

createProductNameIndex();

// Controllers
async function createProductRoute(req, res) {
  // Your implementation here
  try {
    const { name, price, quantity } = req.body;
    const productData = new Product({
      name,
      price,
      quantity,
    });

    const product = await productData.save();
    res.status(201).json({
      succes: true,
      message: "Product Added Successfully",
      Product: product,
    });
  } catch (error) {
    res.status(503).json({ success: false, error: "Internal Sever Error" });
  }
}

async function getAllProductsRoute(req, res) {
  // Your implementation here
  try {
    const products = await Product.find();
    res.status(201).json({ succes: true, Products: products });
  } catch (error) {
    res.status(503).json({ success: false, error: "Internal Sever Error" });
  }
}

async function updateProductRoute(req, res) {
  // Your implementation here
  try {
    const product = await Product.findById(req.params.id);
    product.name = req.body.name ?? product.name;
    product.price = req.body.price ?? product.price;
    product.quantity = req.body.quantity ?? product.quantity;

    await Product.findByIdAndUpdate(req.params.id, product);

    res.status(201).json({
      succes: true,
      message: "Product Updated Successfully",
      UpdatedProduct: product,
    });
  } catch (error) {
    res.status(503).json({ success: false, error: "Internal Sever Error" });
  }
}

async function deleteProductRoute(req, res) {
  // Your implementation here
  try {
    const { id } = req.params;
    const products = await Product.findByIdAndDelete(id);

    res.status(201).json({
      succes: true,
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    res.status(503).json({ success: false, error: "Internal Sever Error" });
  }
}

// routes
app.get("/api/product", getAllProductsRoute);
app.post("/api/product", createProductRoute);
app.put("/api/product/:id", updateProductRoute);
app.delete("/api/product/:id", deleteProductRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is listen at port ${PORT}`);
});
