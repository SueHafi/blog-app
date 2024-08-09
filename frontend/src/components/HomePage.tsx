import Card from "./Card";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { blogData } from "../utils";

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
          {blogData.map((element, i) => {
            return (
              <Card
                key={i}
                img={element.img}
                alt={element.alt}
                title={element.title}
                excerpt={element.excerpt}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
}
