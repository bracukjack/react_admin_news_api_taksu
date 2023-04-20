import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ShowButton,
} from "react-admin";

const ArticlesList = () => {
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

export default ArticlesList;
