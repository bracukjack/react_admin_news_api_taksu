import { Card, CardContent, Typography, CardActions } from "@mui/material";
import {
  Show,
  TextField,
  ImageField,
  DeleteButton,
  EditButton,
  DateField,
} from "react-admin";

const ArticlesShow = () => {
  return (
    <Show>
      <Card sx={{ padding: 5 }}>
        <ImageField
          source="imageUrl"
          sx={{
            "& img": {
              maxWidth: 200,
              maxHeight: 200,
            },
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <TextField fontSize={14} source="id" />
          </Typography>
          <Typography variant="body2" color="text.primary">
            <DateField
              fontSize={14}
              source="publishedAt"
              options={{
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              }}
            />
          </Typography>
          <Typography variant="body2" color="text.dark">
            <TextField source="title" fontSize={20} fontWeight={600} />
          </Typography>
          <Typography variant="body2">
            <TextField source="url" fontSize={14} />
          </Typography>
          <Typography variant="body2" color="text.primary">
            <TextField source="newsSite" fontSize={16} fontWeight={600} />
          </Typography>
          <Typography variant="body2" color="text.primary">
            <TextField source="summary" fontSize={14} />
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
