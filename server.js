const express = require("express");
const cors = require("cors");

const app = express();

app.get("/", (req, res) => {
  return res.json("Hello! welcome!");
});
app.listen(3000, () => console.log("server running on port 3000...."));
