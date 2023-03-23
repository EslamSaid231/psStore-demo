const fs = require("fs");
const data = fs.readFileSync("./Data.JSON");
const cartData = fs.readFileSync("./cart.json");
let obj = JSON.parse(data);
let object = JSON.parse(cartData);

async function fetching() {
  for (let i = 1; i < 40; i++) {
    const { results } = await fetch(
      `https://api.rawg.io/api/games?key=a213d0a5f1704bdd90578d505acfd0f1&page=${i.toString()}`
    ).then((response) => response.json());
    console.log(results);
    let newData = results;
    obj.push(newData);
    let newData2 = JSON.stringify(obj);
    fs.writeFile("./Data.JSON", newData2, (err) => {
      if (err) throw err;
      console.log("New data added");
    });
  }
}

// const data = fs.readFileSync("./Data.JSON");
// let myObject = JSON.parse(data);
// let newData = {
//   id: "22",
//   name: "said",
// };
// myObject.push(newData);
// let newData2 = JSON.stringify(myObject);
// fs.writeFile("./Data.JSON", newData2, (err) => {
//   if (err) throw err;
//   console.log("New data added");
// });
