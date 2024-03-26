import * as React from "react";
import { Edit, SimpleForm, EditProps, SelectInput } from "react-admin";

export const AmitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
