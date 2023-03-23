const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { json } = require("body-parser");
const dotenv = require("dotenv");
const cartStore = require("./CartData");
const cart = require("./cart.json");

dotenv.config({ path: "./config.env" });
//games API
const app = express();
let Allgames = [];
app.use(cors());
app.use(json());
const fetching = async () => {
  await fs.readFile("Data.json", (err, data) => {
    if (err) throw err;
    let games = JSON.parse(data);
    Allgames = games;
    for (let i = 0; i < Allgames.length; i++) {
      app.get(`/pages${i}`, (req, res) => res.send(Allgames[i]));
    }
    const Latest = Allgames.flatMap((games) =>
      games.filter((date) => date.released.includes("2022"))
    );
    app.get("/latest", (req, res) => res.send(Latest));
  });
};
fetching();

app.get("/allgames", (req, res) => res.send(Allgames));

//cart API

app.get("/cart", (req, res) => res.send(cart));
app.put("/cart", (req, res) => {
  res.send(cart);
  if (req.body.items.length <= 0) {
    return;
  } else {
    cartStore(req.body);
  }
  console.log(req.body);
});
app.listen(7000);

// const reducing = (nest, index, arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     arr[index] = { page: nest };
//   }
// };
// // { page: nest }
// setTimeout(() => {
//   Allgames.forEach(reducing);
//   console.log(Object.keys(Allgames));
// }, 500);
// app.get("/", (req, res) => res.send(Allgames));
