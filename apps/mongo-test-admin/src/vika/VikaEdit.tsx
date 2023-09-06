import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const VikaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="mor" source="mor" />
        <TextInput label="rdyjwe" source="rdyjwe" />
      </SimpleForm>
    </Edit>
  );
};
