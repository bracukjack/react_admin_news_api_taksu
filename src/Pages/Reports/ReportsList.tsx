import { Datagrid, List, TextField } from "react-admin";

const ReportsList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="url" />
        <TextField source="image_url" />
        <TextField source="news_site" />
        <TextField source="sumary" />
        <TextField source="published_at" />
        <TextField source="update_at" />
      </Datagrid>
    </List>
  );
};

export default ReportsList;
