import Header from "./Header";
import Card from "./Card";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Header />
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
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Box>
      </Box>
    </>
  );
}
