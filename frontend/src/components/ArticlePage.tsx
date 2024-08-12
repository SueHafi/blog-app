import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { getData, Article } from "../utils";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

const Text = styled.pre`
  white-space: pre-wrap;
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
`;

export default function ArticlePage() {
  const [currentArticle, setCurrentArticle] = useState<Article | null>({
    img: "",
    alt: "",
    title: "",
    excerpt: "",
    content: "",
    author: "",
    createdAt: "",
    id: -1,
  });
  let { id } = useParams();

  useEffect(() => {
    async function callData() {
      const data = await getData();
      const idNum = Number(id);

      const article = data.find((data) => data.id === idNum);
      if (article) {
        setCurrentArticle(article);
      } else {
        setCurrentArticle(null);
      }
    }
    callData();
  }, []);

  return (
    <>
      {currentArticle ? (
        <Box maxWidth={1000} mx="auto" p={3} mb={3}>
          <Box
            display="block"
            mx="auto"
            mb={2}
            component="img"
            sx={{
              height: 500,
              width: 800,
              maxHeight: { xs: 200, md: 350 },
              maxWidth: { xs: 300, md: 800 },
            }}
            alt={currentArticle.alt}
            src={currentArticle.img}
          />
          <Typography
            p="4"
            align="center"
            variant="h2"
            component="h1"
            gutterBottom
          >
            {currentArticle.title}
          </Typography>
          <Box display="flex" justifyContent="center" gap={1}>
            <Typography>By {currentArticle.author}</Typography>
            <Typography>
              {currentArticle.createdAt
                ? format(new Date(currentArticle.createdAt), "do MMMM yyyy")
                : ""}
            </Typography>
          </Box>
          <Text>{currentArticle.content}</Text>
        </Box>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
}
