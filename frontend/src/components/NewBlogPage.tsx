import { Box, TextField, Button } from "@mui/material";
import { FormEvent, ChangeEvent } from "react";
import { useState } from "react";

export default function NewBlogPage() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    excerpt: "",
    content: "",
  });
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleFormDataChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const newFormData = { ...formData };
    const elementName = event.target.name as keyof typeof formData;
    newFormData[elementName] = event.target.value;
    setFormData(newFormData);
  }

  return (
    <>
      <Box
        onSubmit={handleSubmit}
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
          name="title"
          label="Title"
          value={formData.title}
          onChange={handleFormDataChange}
          variant="outlined"
        />
        <TextField
          margin="normal"
          helperText="Please enter your name or leave anonomous"
          id="author"
          name="author"
          label="Author Name"
          value={formData.author}
          onChange={handleFormDataChange}
          variant="outlined"
        />
        <TextField
          margin="normal"
          helperText="Please enter an article summary up to 400 chracters"
          id="excerpt"
          name="excerpt"
          label="article summary"
          minRows={3}
          value={formData.excerpt}
          onChange={handleFormDataChange}
          multiline
        />
        <TextField
          margin="normal"
          helperText="Please enter the content of your article"
          id="content"
          name="content"
          label="Article Content"
          minRows={3}
          value={formData.content}
          onChange={handleFormDataChange}
          multiline
        />
        <Box>
          <Button type="submit" variant="outlined">
            Submit blog post
          </Button>
        </Box>
      </Box>
    </>
  );
}
