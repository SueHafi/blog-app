import Header from "./Header";
import { Box } from "@mui/material";

export default function Article() {
  return (
    <>
      <Header />
      <Box
        component="img"
        sx={{
          height: 300,
          width: 500,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="test image"
        src="/blogImages/mobile.jpg"
      />
      <h1>hiiii</h1>
    </>
  );
}
