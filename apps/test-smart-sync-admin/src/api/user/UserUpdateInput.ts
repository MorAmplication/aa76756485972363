import { InputJsonValue } from "../../types";
import { HomeUpdateManyWithoutUsersInput } from "./HomeUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  homes?: HomeUpdateManyWithoutUsersInput;
};
