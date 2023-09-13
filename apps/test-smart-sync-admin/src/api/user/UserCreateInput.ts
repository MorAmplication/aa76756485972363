import { InputJsonValue } from "../../types";
import { HomeCreateNestedManyWithoutUsersInput } from "./HomeCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  homes?: HomeCreateNestedManyWithoutUsersInput;
};
