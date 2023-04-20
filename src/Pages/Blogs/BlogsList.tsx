import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  TextField,
} from "react-admin";

const BlogsList = () => {
  return (
    <List>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="newsSite" />
        <TextField source="title" />
        <TextField source="url" />
        <ShowButton color="inherit" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default BlogsList;
