const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter the Product Name"],
  },
  description: {
    type: String,
    required: [true, "Please Enter the Product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter the Product Price"],
    maxLength: [8, "Price Cannot exceed 8 characters"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter the Product Category"],
  },
  stock: {
    type: Number,
    required: [true, "Please Enter the Product Stock"],
    maxLength: [4, "Stock Cannot exceed 4 characters"],
    default: 1,
  },
  numberOfReviews: {
    type: String,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
