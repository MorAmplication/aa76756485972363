import { User } from "../user/User";
import { JsonValue } from "type-fest";

export type Home = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  test: string;
  amit: string;
  avi: string;
  username: string;
  roles: JsonValue;
};
