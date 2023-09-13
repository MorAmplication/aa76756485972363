import { HomeWhereUniqueInput } from "./HomeWhereUniqueInput";
import { HomeUpdateInput } from "./HomeUpdateInput";

export type UpdateHomeArgs = {
  where: HomeWhereUniqueInput;
  data: HomeUpdateInput;
};
