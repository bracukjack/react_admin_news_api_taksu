import * as React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  required,
  ImageField,
  ImageInput,
} from "react-admin";

export const ArticleEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput label="ID" variant="outlined" source="id" disabled fullWidth />
      <TextInput
        label="Title"
        variant="outlined"
        source="title"
        validate={[required()]}
        fullWidth
      />
      <ImageInput variant="outlined" source="pictures" label="Related pictures">
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput label="Site URL" variant="outlined" source="url" fullWidth />

      <TextInput
        label="News Site"
        variant="outlined"
        source="news_site"
        fullWidth
      />
      <TextInput
        label="Summary"
        variant="outlined"
        source="summary"
        fullWidth
      />
      <DateInput
        label="Publication Date"
        variant="outlined"
        source="published_at"
        defaultValue={new Date()}
        fullWidth
      />
    </SimpleForm>
  </Edit>
);
