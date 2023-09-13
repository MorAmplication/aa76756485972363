import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type HomeWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  test?: StringNullableFilter;
  amit?: StringNullableFilter;
  avi?: StringNullableFilter;
};
