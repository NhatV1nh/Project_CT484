const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    productName: { type: String, maxLength: 255 },
    productDes: { type: String },
    categoryId: { type: String },
    price: { type: Number },
    trademark: { type: String },
    origin: { type: String },
    productImg: [{ type: String, maxLength: 255 }],
    soldOut: { type: Boolean, default: false },
  },
  { collection: "products" }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;