import * as React from "react";
import { Create, SimpleForm, CreateProps, SelectInput } from "react-admin";

export const AmitCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="enumGender"
          label="enumGender"
          choices={[
            { label: "male", value: "Male" },
            { label: "female", value: "Female" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
