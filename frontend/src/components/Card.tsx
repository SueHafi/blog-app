import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

type CardProps = {
  img: string;
  alt: string;
  title: string;
  excerpt: string;
  id: number;
};

export default function Card({ img, alt, title, excerpt, id }: CardProps) {
  return (
    <MuiCard>
      <CardActionArea>
        <CardMedia component="img" height="200" image={img} alt={alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary" href={`/articles/${id}`}>
          View article
        </Button>
      </CardActions>
    </MuiCard>
  );
}
