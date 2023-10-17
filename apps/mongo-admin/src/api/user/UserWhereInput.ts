import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type UserWhereInput = {
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  roles?: JsonFilter;
};
