const fs = require("node:fs/promises");

async function readData() {
  const data = await fs.readFile("users.json", "utf8");
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile("users.json", JSON.stringify(data));
}
async function person(data) {
  const user = await data.email;
  console.log(user.email);
  return user;
}
exports.readData = readData;
exports.writeData = writeData;
exports.person = person;
