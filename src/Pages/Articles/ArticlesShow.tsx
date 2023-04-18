import { Delete, ModeEdit, Padding } from "@mui/icons-material";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import { Show, TextField, ImageField, Button } from "react-admin";

const ArticleShow = () => {
  return (
    <Show>
      <Card sx={{ padding: 5 }}>
        <ImageField source="image_url" title="title" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <TextField fontSize={10} source="id" />
          </Typography>
          <Typography variant="body2" color="text.dark">
            <TextField fontSize={20} fontWeight={600} source="title" />
          </Typography>
          <Typography variant="body2">
            <TextField fontSize={12} source="url" />
          </Typography>
          <Typography variant="body2" color="text.primary">
            <TextField fontSize={16} source="news_site" />
          </Typography>
          <Typography variant="body2" color="text.primary">
            <TextField fontSize={16} source="summary" />
          </Typography>
          <Typography variant="body2" color="text.primary">
            <TextField fontSize={12} source="published_at" />
          </Typography>
          <Typography variant="body2" color="text.primary">
            <TextField fontSize={12} source="published_at" />
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="medium"
            label="Edit"
            variant="outlined"
            color="primary"
            startIcon={<ModeEdit />}
          ></Button>
          <Button
            size="medium"
            label="Delete"
            variant="outlined"
            color="secondary"
            startIcon={<Delete />}
          ></Button>
        </CardActions>
      </Card>
    </Show>
  );
};
export default ArticleShow;
