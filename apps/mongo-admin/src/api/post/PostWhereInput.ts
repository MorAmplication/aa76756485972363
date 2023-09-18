import { StringFilter } from "../../util/StringFilter";

export type PostWhereInput = {
  title?: StringFilter;
  userId?: StringFilter;
};
