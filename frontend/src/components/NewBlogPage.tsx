import { Box, FormControl, TextField } from "@mui/material";

export default function NewBlogPage() {
  return (
    <>
      <Box
        display="inline-flex"
        position="relative"
        alignItems="stretch"
        flexDirection="column"
        component="form"
        maxWidth={1000}
        mx="auto"
        p={3}
        mb={3}
      >
        <TextField
          margin="normal"
          helperText="Please enter the title for your blog"
          id="title"
          label="Title"
          variant="outlined"
        />
        <TextField
          margin="normal"
          helperText="Please enter your name or leave anonomous"
          id="author"
          label="Author Name"
          variant="outlined"
        />
        <TextField
          margin="normal"
          helperText="Please enter an article summary up to 400 chracters"
          id="excerpt"
          label="article summary"
          minRows={3}
          multiline
        />
        <TextField
          margin="normal"
          helperText="Please enter the content of your article"
          id="content"
          label="Article Content"
          minRows={3}
          multiline
        />
      </Box>
    </>
  );
}
