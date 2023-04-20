import { Datagrid, DateField, List, TextField } from "react-admin";

const ReportsList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="url" />
        <TextField source="newsSite" />
        <DateField
          source="publishedAt"
          options={{
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }}
        />
      </Datagrid>
    </List>
  );
};

export default ReportsList;
