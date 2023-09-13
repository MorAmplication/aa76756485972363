import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type HomeCreateInput = {
  user?: UserWhereUniqueInput | null;
  test?: string | null;
  amit?: string | null;
  avi?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
};
