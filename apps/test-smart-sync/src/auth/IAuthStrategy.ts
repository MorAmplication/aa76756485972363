import { HomeInfo } from "./HomeInfo";

export interface IAuthStrategy {
  validate: (...any: any) => Promise<HomeInfo>;
}
