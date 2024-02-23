// 23. Problem: Mongoose Population

// Problem Statement: Extend the previous "Product" schema to include a reference to a "Category"
// entity.Implement a Mongoose population query to retrieve all products with their corresponding
// category details.

const express = require("express");
const mongoose = require("mongoose");

const app = express();

//  Databse Connection
const connectDB = () => {
  mongoose.connect("mongodb://127.0.0.1/testDatabase");

  const db = mongoose.connection;
  db.on("error", (error) => console.error("MongoDB connection error:", error));
  db.once("open", () => console.log("Connected to MongoDB"));
};

connectDB();

// Category Schema
const categorySchema = mongoose.Schema({
  category_name: {
    type: String,
    require: [true, "Category name is Required"],
  },
});

const Category = mongoose.model("Category", categorySchema);

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

  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Category,
  },
});

const Product = mongoose.model("Product", productSchema);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Controllers
async function createProduct(req, res) {
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

async function getProductsPopulatedWithCategory(req, res) {
  // Your implementation here
  try {
    const products = await Product.find().populate("categoryId");
    res.status(201).json({ succes: true, Products: products });
  } catch (error) {
    res.status(503).json({ success: false, error: "Internal Sever Error" });
  }
}

async function updateProduct(req, res) {
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

async function deleteProduct(req, res) {
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

async function createCategory(req, res) {
  // Your implementation here
  try {
    const catData = new Category({
      category_name: req.body.name,
    });

    const category = await catData.save();
    res.status(201).json({
      succes: true,
      message: "Category Added Successfully",
      Category: category,
    });
  } catch (error) {
    res.status(503).json({ success: false, error: "Internal Sever Error" });
  }
}

// routes
app.get("/product", getProductsPopulatedWithCategory);
app.post("/product", createProduct);
app.put("/products/:id", updateProduct);
app.delete("/product/:id", deleteProduct);
app.post("/category", createCategory);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is listen at port ${PORT}`);
});
