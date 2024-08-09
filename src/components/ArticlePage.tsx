import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { blogData } from "../utils";

const Text = styled.pre`
  white-space: pre-wrap;
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
`;

export default function Article() {
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
          alt={blogData[0].alt}
          src={blogData[0].img}
        />
        <Typography
          p="4"
          align="center"
          variant="h2"
          component="h1"
          gutterBottom
        >
          {blogData[0].title}
        </Typography>
        <Box display="flex" justifyContent="center" gap={1}>
          <Typography>By {blogData[0].author}</Typography>
          <Typography>| {blogData[0].createdAt}</Typography>
        </Box>
        <Text>{blogData[0].content}</Text>
      </Box>
    </>
  );
}
