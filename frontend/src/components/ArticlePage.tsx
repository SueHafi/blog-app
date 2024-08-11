import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { getData, Article } from "../utils";
import { format } from "date-fns";
import { useState, useEffect } from "react";

const Text = styled.pre`
  white-space: pre-wrap;
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
`;

export default function ArticlePage() {
  const [articleData, setArticleData] = useState<Article[]>([]);

  useEffect(() => {
    async function callData() {
      const data = await getData();
      setArticleData(data);
    }
    callData();
  }, []);

  return (
    <>
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
          alt={articleData[0] ? articleData[0].alt : ""}
          src={articleData[0] ? articleData[0].img : ""}
        />
        <Typography
          p="4"
          align="center"
          variant="h2"
          component="h1"
          gutterBottom
        >
          {articleData[0] ? articleData[0].title : ""}
        </Typography>
        <Box display="flex" justifyContent="center" gap={1}>
          <Typography>
            By {articleData[0] ? articleData[0].author : ""}
          </Typography>
          <Typography>
            |{" "}
            {articleData[0]
              ? format(new Date(articleData[0].createdAt), "do MMMM yyyy")
              : ""}
          </Typography>
        </Box>
        <Text>{articleData[0] ? articleData[0].content : ""}</Text>
      </Box>
    </>
  );
}
