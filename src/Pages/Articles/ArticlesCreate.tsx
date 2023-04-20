import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  required,
  ImageField,
  ImageInput,
} from "react-admin";

export const ArticlesCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput
        label="Title"
        variant="outlined"
        source="title"
        validate={[required()]}
        fullWidth
      />
      <ImageInput variant="outlined" source="pictures" label="Related pictures">
        <ImageField source="imageUrl" title="title" />
      </ImageInput>
      <TextInput label="Site URL" variant="outlined" source="url" fullWidth />

      <TextInput
        label="News Site"
        variant="outlined"
        source="newsSite"
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
        source="publishedAt"
        defaultValue={new Date()}
        fullWidth
      />
    </SimpleForm>
  </Create>
);
