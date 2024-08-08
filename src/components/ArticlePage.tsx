import Header from "./Header";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const Text = styled.pre`
  white-space: pre-wrap;
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
`;

export default function Article() {
  return (
    <>
      <Header />
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
          alt="test image"
          src="/blogImages/mobile.jpg"
        />
        <Typography
          p="4"
          align="center"
          variant="h2"
          component="h1"
          gutterBottom
        >
          Functional Programming
        </Typography>
        <Box display="flex" justifyContent="center" gap={1}>
          <Typography>By Uncle Bob</Typography>
          <Typography>| 8th August 2024</Typography>
        </Box>
        <Text>
          {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          accusamus odit dolores esse doloremque eum qui, aperiam earum magni
          officia unde, dolor veniam est odio harum iste ex pariatur sunt!

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          accusamus odit dolores esse doloremque eum qui, aperiam earum magni
          officia unde, dolor veniam est odio harum iste ex pariatur sunt!

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          accusamus odit dolores esse doloremque eum qui, aperiam earum magni
          officia unde, dolor veniam est odio harum iste ex pariatur sunt!`}
        </Text>
      </Box>
    </>
  );
}
