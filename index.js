const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

const dotenv = require("dotenv");
app.use(express.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());
dotenv.config({ path: "./config.env" });
PORT = process.env.PORT || 4000 ;
require("./DB/db");

const routes = require("./router/routes");
app.use("/", routes);

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
  console.log(`app started at Port ${PORT}`);
});
