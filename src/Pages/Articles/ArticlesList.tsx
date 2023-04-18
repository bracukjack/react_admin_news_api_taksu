import React from "react";
import { List, Datagrid, TextField } from "react-admin";
import { useListContext } from "react-admin";
import Pagination from "../../Components/Pagination";

const ArticlesList = () => {
  return (
    <List>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="url" />
        <TextField source="image_url" />
        <TextField source="news_site" />
        <TextField source="sumary" />
        <TextField source="published_at" />
        <TextField source="update_at" />
        <TextField source="featured" />
      </Datagrid>
    </List>
  );
};

export default ArticlesList;
