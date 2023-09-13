import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HomeWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
