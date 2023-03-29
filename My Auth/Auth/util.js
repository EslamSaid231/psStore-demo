const fsPr = require("node:fs/promises");
const { sign, verify } = require("jsonwebtoken");
const fs = require("fs");
const { NotAuthError } = require("./errors");
const KEY = "supersecret";

function createJSONToken(email) {
  return sign({ email }, KEY, { expiresIn: "1h" });
}
function validateJSONToken(token) {
  return verify(token, KEY);
}
async function readData() {
  const data = await fs.readFile("Users.json", "utf8");
  return JSON.parse(data);
}
async function writeData(param) {
  fs.readFile("./Users.json", (err, data) => {
    if (err) throw console.log(err);
    let json = JSON.parse(data);
    console.log(json);
    json.push(param);
    fs.writeFile("./Users.json", JSON.stringify(json), (err) => {
      if (err) throw console.log(err);
    });
  });
}
function checkAuthMiddleware(req, res, next) {
  if (req.method === "OPTIONS") {
    return next();
  }
  if (!req.headers.authorization) {
    console.log("NOT AUTH. AUTH HEADER MISSING.");
    return next(new NotAuthError("Not authenticated."));
  }
  const authFragments = req.headers.authorization.split(" ");

  if (authFragments.length !== 2) {
    console.log("NOT AUTH. AUTH HEADER INVALID.");
    return next(new NotAuthError("Not authenticated."));
  }
  const authToken = authFragments[1];
  try {
    const validatedToken = validateJSONToken(authToken);
    req.token = validatedToken;
  } catch (error) {
    console.log("NOT AUTH. TOKEN INVALID.");
    return next(new NotAuthError("Not authenticated."));
  }
  next();
}
exports.readData = readData;
exports.writeData = writeData;

exports.createJSONToken = createJSONToken;
exports.validateJSONToken = validateJSONToken;

exports.checkAuth = checkAuthMiddleware;
