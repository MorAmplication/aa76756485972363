import { User } from "../user/User";

export type Home = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
};
