import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const VikaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="mor" source="mor" />
        <TextInput label="rdyjwe" source="rdyjwe" />
        <TextInput label="lj,bgljbl" source="ljBgljbl" />
      </SimpleForm>
    </Create>
  );
};
