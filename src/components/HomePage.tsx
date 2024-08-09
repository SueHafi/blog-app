import Card from "./Card";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const testCardObject = {
  img: "/blogImages/mobile.jpg",
  alt: "test image",
  title: "Lizard",
  excerpt:
    "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
};

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
        >
          <Card
            img={testCardObject.img}
            alt={testCardObject.alt}
            title={testCardObject.title}
            excerpt={testCardObject.excerpt}
          />
          <Card
            img={testCardObject.img}
            alt={testCardObject.alt}
            title={testCardObject.title}
            excerpt={testCardObject.excerpt}
          />
          <Card
            img={testCardObject.img}
            alt={testCardObject.alt}
            title={testCardObject.title}
            excerpt={testCardObject.excerpt}
          />
          <Card
            img={testCardObject.img}
            alt={testCardObject.alt}
            title={testCardObject.title}
            excerpt={testCardObject.excerpt}
          />
          <Card
            img={testCardObject.img}
            alt={testCardObject.alt}
            title={testCardObject.title}
            excerpt={testCardObject.excerpt}
          />
          <Card
            img={testCardObject.img}
            alt={testCardObject.alt}
            title={testCardObject.title}
            excerpt={testCardObject.excerpt}
          />
        </Box>
      </Box>
    </>
  );
}
