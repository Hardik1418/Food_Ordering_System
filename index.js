const express = require("express");
const path = require("path");
const homeRouter = require("./routes/index");

const PORT = 1205;
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'asset')));

app.get("/", (req, res) => {
  res.render("homePage");
});

app.listen(PORT, () => {
  console.log(`Server is Started on Port: ${PORT}`);
});
