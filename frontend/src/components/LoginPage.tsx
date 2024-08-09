import { Box, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";

export default function LoginPage() {
  return (
    <>
      <Box maxWidth={1000} mx="auto" p={3} mb={3}>
        <FormControl>
          <TextField
            helperText="Please enter your name"
            id="demo-helper-text-aligned"
            label="Name"
          />
          <TextField
            helperText="Please enter your name"
            id="demo-helper-text-aligned"
            label="Name"
          />
        </FormControl>
      </Box>
    </>
  );
}
