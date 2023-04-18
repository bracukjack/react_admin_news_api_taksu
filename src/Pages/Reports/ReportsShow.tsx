import {
  Show,
  SimpleShowLayout,
  TextField,
  RichTextField,
  DateField,
  ImageField,
} from "react-admin";

const ReportsShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="url" />
        <ImageField source="image_url" title="title" />
        <TextField source="news_site" />
        <TextField source="summary" />
      </SimpleShowLayout>
    </Show>
  );
};
export default ReportsShow;
