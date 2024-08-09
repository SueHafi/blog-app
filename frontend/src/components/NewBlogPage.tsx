import { Box, FormControl, TextField } from "@mui/material";

export default function NewBlogPage() {
  return (
    <>
      <Box maxWidth={1000} mx="auto" p={3} mb={3}>
        <FormControl>
          <TextField
            helperText="Please enter your name"
            id="author-name"
            label="Author name"
          />
        </FormControl>
      </Box>
    </>
  );
}
