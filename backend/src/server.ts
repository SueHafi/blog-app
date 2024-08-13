import cors from "cors";
import express from "express";
import blogData from "./data.json";
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/health", (req, res) => {
  res.send("I'm working");
});

app.get("/articles", (req, res) => {
  const dataToSend = blogData.map((element) => {
    const mappedData = {
      img: element.img,
      alt: element.alt,
      title: element.title,
      excerpt: element.excerpt,
      id: element.id,
    };
    return mappedData;
  });
  res.json(dataToSend);
});

app.get("/articles/:id", (req, res) => {
  const id = req.params.id;
  const idNum = Number(id);
  if (isNaN(idNum)) {
    res.status(400).json({
      errorMessage: `ID parameter must be a number`,
    });
    return;
  }

  const elementMatchingData = blogData.find((element) => {
    return element.id === idNum;
  });

  if (!elementMatchingData) {
    res.status(404).json({
      errorMessage: `Article with id ${idNum} does not exist`,
    });
    return;
  }

  const mappedData = {
    img: elementMatchingData.img,
    alt: elementMatchingData.alt,
    title: elementMatchingData.title,
    content: elementMatchingData.content,
    author: elementMatchingData.author,
    createdAt: elementMatchingData.createdAt,
    id: elementMatchingData.id,
  };
  res.json(mappedData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
