import cors from "cors";
import express from "express";
import { z, ZodError } from "zod";
import blogData from "./blogData.json";
import imageData from "./imageData.json";
import {
  getRandomElement,
  setupIdGenerator,
  descendingDateSorter,
} from "./utils";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const initialHighestId = Math.max(...blogData.map((article) => article.id));

const generateId = setupIdGenerator(initialHighestId);

app.get("/", (req, res) => {
  res.send("I'm working");
});

app.get("/articles", (req, res) => {
  const copiedBlogData = [...blogData];
  copiedBlogData.sort(descendingDateSorter);
  const dataToSend = copiedBlogData.map((element) => {
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

const createArticleSchema = z.object({
  title: z.string().trim().min(1),
  author: z.string().trim(),
  excerpt: z.string().trim().min(1),
  content: z.string().trim().min(1),
});

app.post("/articles", (req, res) => {
  let title;
  let author;
  let excerpt;
  let content;

  try {
    const valid = createArticleSchema.parse(req.body);
    title = valid.title;
    author = valid.author;
    excerpt = valid.excerpt;
    content = valid.content;
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({
        errorMessage: error.issues[0].message,
        errorProperty: error.issues[0].path[0],
      });
    }
    return;
  }

  const id = generateId();
  const { alt, img } = getRandomElement(imageData);
  const createdAt = new Date().toISOString();
  const newArticle = {
    title,
    author,
    excerpt,
    content,
    id,
    img,
    alt,
    createdAt,
  };
  blogData.push(newArticle);
  res.status(201).json(newArticle);
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
