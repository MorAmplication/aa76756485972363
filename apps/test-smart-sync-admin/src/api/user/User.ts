import { JsonValue } from "type-fest";
import { Home } from "../home/Home";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: JsonValue;
  homes?: Array<Home>;
};
