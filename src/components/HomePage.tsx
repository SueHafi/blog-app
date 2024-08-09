import Card from "./Card";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const blogImages = [
  {
    img: "/blogImages/blog-img/squirrel.jpg",
    alt: "squirrel leaping from tree",
    title: "Think before you jump into programming - guide for beginners",
    excerpt:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    img: "/blogImages/blog-img/glasses.jpg",
    alt: "glasses on laptop making code in background visible through the lens",
    title: "Accessibility for all",
    excerpt:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    img: "/blogImages/blog-img/seo.jpg",
    alt: "robot looking at a browser with a magnifying glass",
    title: "Key reasons to why SEO is important",
    excerpt:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    img: "/blogImages/blog-img/chatgpt.jpg",
    alt: "mobile phone with random shapes around it and text in the background that reads as chatgpt",
    title: "Should you code using ChatGPT?",
    excerpt:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    img: "/blogImages/blog-img/browser.jpg",
    alt: "firefox browser with shapes floating around it",
    title: "Browser compatability and why it matters.",
    excerpt:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    img: "/blogImages/blog-img/mobile.jpg",
    alt: "pink phone, shapes and cubes in a grid formation",
    title: "Mobile first design and why its important",
    excerpt:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    img: "/blogImages/blog-img/apple.jpg",
    alt: "apple laptop with books stacked neatly next to it",
    title: "Clean code principles to live by.",
    excerpt:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    img: "/blogImages/blog-img/keyboard.jpg",
    alt: "keyboard with white rgb lighting",
    title: "How to debug with confidence.",
    excerpt:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    img: "/blogImages/blog-img/react.jpg",
    alt: "some react code on a screen",
    title: "Three new features that will change react forever.",
    excerpt:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    img: "/blogImages/blog-img/letters.jpg",
    alt: "letters carved onto wood",
    title: "Naming conventions in programming",
    excerpt:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    img: "/blogImages/blog-img/python.jpg",
    alt: "green python resting on a tree branch",
    title: "Is python the best language for backend development?",
    excerpt:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    img: "/blogImages/blog-img/git.jpg",
    alt: "git's cat logo carved in wood with screens in background",
    title: "Top 10 git version control tips.",
    excerpt:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
];

export default function Home() {
  return (
    <>
      <Box maxWidth={1000} mx="auto" p={3} mb={3}>
        <Typography
          p="4"
          align="center"
          variant="h2"
          component="h1"
          gutterBottom
        >
          Articles
        </Typography>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          gap={3}
          rowGap={8}
        >{blogImages.map((element, i)=>{
            return <Card
            key={i}
            img={element.img}
            alt={element.alt}
            title={element.title}
            excerpt={element.excerpt}
          />
          })}
        </Box>
      </Box>
    </>
  );
}
