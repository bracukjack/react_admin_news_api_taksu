import { Delete, ModeEdit } from "@mui/icons-material";
import { Card, CardContent, Typography, CardActions } from "@mui/material";
import {
  Show,
  TextField,
  ImageField,
  Button,
  DeleteButton,
  EditButton,
} from "react-admin";

const ArticlesShow = () => {
  return (
    <Show>
      <Card sx={{ padding: 5 }}>
        <ImageField source="imageUrl" title="title" />
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
            <TextField fontSize={16} source="newsSite" />
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
          <EditButton />
          <DeleteButton />
        </CardActions>
      </Card>
    </Show>
  );
};
export default ArticlesShow;
