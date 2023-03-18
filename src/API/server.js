const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { json } = require("body-parser");
const dotenv = require("dotenv");
const Data = require("./Data.JSON");
dotenv.config({ path: "./config.env" });

const app = express();
let Allgames;
app.use(cors());
app.use(json());
const fetching = async () => {
  await fs.readFile("Data.JSON", (err, data) => {
    if (err) throw err;
    let games = JSON.parse(data);
    Allgames = games;
  });
};
fetching();

app.get("/home", (req, res) => res.send(Allgames));

app.listen(7000);
