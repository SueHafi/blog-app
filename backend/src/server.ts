import cors from "cors";
import express from "express";
import blogData from "./data.json";
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/articles", (req, res) => {
  res.json(blogData);
});

app.get("/article", (req, res) => {
  res.json(blogData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
