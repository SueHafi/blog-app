import Card from "./Card";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { getArticleSummariesData, ArticleSummary } from "../utils";
import { useState, useEffect, useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { PostCountContext } from "../PostCountContext";

export default function Home() {
  const [articleData, setArticleData] = useState<ArticleSummary[]>([]);
  const setPostCount = useOutletContext() as (x: number) => void;
  const postCount = useContext(PostCountContext);

  useEffect(() => {
    async function callData() {
      const data = await getArticleSummariesData();
      setPostCount(data.length);
      setArticleData(data);
    }
    callData();
  }, []);

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
        <Typography
          fontWeight="light"
          textAlign={"right"}
          sx={{ mb: 2}}
        >{` Number of posts: ${postCount}`}</Typography>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          gap={3}
          rowGap={8}
        >
          {articleData.map((element, i) => {
            return (
              <Card
                key={i}
                img={element.img}
                alt={element.alt}
                title={element.title}
                excerpt={element.excerpt}
                id={element.id}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
}
