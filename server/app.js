require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;

const { setupKinde, jwtVerify } = require("@kinde-oss/kinde-node-express");

// KINDE SETUP SERVER
const config = {
  clientId: process.env.CLIENT_ID,
  issuerBaseUrl: "https://panmenu.kinde.com",
  siteUrl: "http://localhost:5173",
  secret: "",
  redirectUrl: "http://localhost:5173",
};

setupKinde(config, app);

// KINDE JWT VERIFIER
const verifier = jwtVerify("https://panmenu.kinde.com");

const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// KINDE PROTECTED ROUTE EXAMPLE
app.get("/api", verifier, async (req, res) => {
  console.log(req.user);
  res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
