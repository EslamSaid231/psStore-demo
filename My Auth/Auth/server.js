const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const { readData, writeData } = require("./util");
const { json } = require("body-parser");
const { sign, verify } = require("jsonwebtoken");
const KEY = "supersecret";

function createJSONToken(email) {
  return sign({ email }, KEY, { expiresIn: "1h" });
}
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});
app.use(express.json());
app.get("/users", async (req, res) => {
  const users = await readData();
  console.log(users);
  res.json(users);
});

app.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { email: req.body.email, password: hashedPassword };
    const authToken = createJSONToken(user.email);
    writeData(user);
    res
      .status(201)
      .json({ message: "User Created.", user: user, token: authToken });

    res.status(200).send(json({ message: "created successfully" }));
  } catch {
    res.status(500).send();
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const users = await readData();
  const user = users.find((user) => (user.email = email));
  if (user === null) {
    return res.status(400).send("Cannot find user");
  } else {
    res.send("Not Allowed");
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
      res.send("Success");
    }
  } catch {
    res.status(422).json({
      message: "Invalid credentials.",
      errors: { credentials: "Invalid email or password entered." },
    });
  }
  const token = createJSONToken(email);
  res.json({ token });
});

app.listen(8080);
