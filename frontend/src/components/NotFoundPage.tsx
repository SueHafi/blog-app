import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";

export default function NotFoundPage() {
  return (
    <Box>
      <Typography sx={{m:2}} variant="h2" component="h1" gutterBottom>
        404 PAGE NOT FOUND
      </Typography>
      <Typography sx={{mx:2}} p="4" component="p" variant="subtitle1" gutterBottom>
        Oops! You seem to be lost.
      </Typography>
      <Typography sx={{mx:2}} p="4" component="p" variant="subtitle1" gutterBottom>
        Here are some helpful links:
      </Typography>
      <List aria-label="links to other pages">
        <ListItem>
          <Link href="/" color="primary">
            <ListItemText primary="Home" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/login" color="primary">
            <ListItemText primary="Login" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/articles/new" color="primary">
            <ListItemText primary="Create Post" />
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}

{
  /* <div>
  <h1>Oops! You seem to be lost.</h1>
  <p>Here are some helpful links:</p>
  <Link to="/">Home</Link>
  <Link to="/blog">Blog</Link>
  <Link to="/contact">Contact</Link>
</div>; */
}
