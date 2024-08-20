import Card from "./Card";
import Box from "@mui/material/Box";
import { Link, Typography } from "@mui/material";
import { getArticleSummariesData, ArticleSummary } from "../utils";
import { useState, useEffect, useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { PostCountContext } from "../PostCountContext";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { calculatePageCount } from "../utils";

export default function Home() {
  const [articleData, setArticleData] = useState<ArticleSummary[]>([]);
  const setPostCount = useOutletContext() as (x: number) => void;
  const postCount = useContext(PostCountContext);
  const pageCount = calculatePageCount(postCount);
  if (pageCount === 1) {
  }
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
          sx={{ mb: 2 }}
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
        <Stack sx={{ alignItems: "center", my: 4 }} spacing={2}>
          <Pagination
            count={pageCount}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                href={`/${item.page === 1 ? "" : `?page=${item.page}`}`}
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack>
      </Box>
    </>
  );
}
