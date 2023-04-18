import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  TextField,
} from "react-admin";

const BlogsList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <DateField source="published_at" />
        <TextField source="category" />
        <BooleanField source="commentable" />
      </Datagrid>
    </List>
  );
};

export default BlogsList;
