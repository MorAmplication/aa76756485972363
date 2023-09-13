import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HomeCreateInput = {
  user?: UserWhereUniqueInput | null;
};
