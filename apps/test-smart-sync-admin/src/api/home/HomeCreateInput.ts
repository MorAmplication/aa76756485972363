import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type HomeCreateInput = {
  user?: UserWhereUniqueInput | null;
  test: string;
  amit: string;
  avi: string;
  username: string;
  password: string;
  roles: InputJsonValue;
};
