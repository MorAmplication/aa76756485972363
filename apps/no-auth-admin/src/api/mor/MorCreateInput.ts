import { UserCreateNestedManyWithoutMorsInput } from "./UserCreateNestedManyWithoutMorsInput";

export type MorCreateInput = {
  users?: UserCreateNestedManyWithoutMorsInput;
};
