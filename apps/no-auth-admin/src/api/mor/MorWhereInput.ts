import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type MorWhereInput = {
  id?: StringFilter;
  users?: UserListRelationFilter;
};
