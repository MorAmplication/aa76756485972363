import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  roles: JsonValue;
};
