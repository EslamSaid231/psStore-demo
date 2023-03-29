const fs = require("fs");
const express = require("express");

async function cartStore(param) {
  fs.readFile("./cart.json", (err, data) => {
    if (err) throw err;
    let json = JSON.parse(data);
    json.push(param);
    fs.writeFile("./cart.json", JSON.stringify(json), (err) => {
      if (err) throw err;
    });
  });
}

module.exports = cartStore;
