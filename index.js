import express from "express";
import EmailVerify from "./controller/EmailVerify.js";
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to EJS world!</h1>");
});

app.get("/email", EmailVerify);

app.listen(3000, () => {
  console.log("server started on port 3000");
});
