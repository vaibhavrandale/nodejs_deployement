import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.get("/api/get", (req, res) => {
  res.send("Welcom to nodejs deployment");
});

app.get("/api/post", (req, res) => {
  res.send("nodejs posted successfully!");
});

app.listen(9000, () => {
  console.log(`Server is running on port 9000`);
});
