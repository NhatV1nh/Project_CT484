const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ct449_project");
    console.log("Kết nối thành công");
  } catch (error) {
    console.log("Kết nối thất bại");
  }
}

module.exports = { connect };