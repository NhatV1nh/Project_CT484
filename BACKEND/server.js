const app = require("./app");
const db = require("./app/config");
db.connect();
// Khoi dong server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}.`);
});