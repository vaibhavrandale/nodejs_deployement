import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.get("/", (req, res) => {
  res.send("Welcom to nodejs deployment");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
