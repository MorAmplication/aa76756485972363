import { Home as THome } from "../api/home/Home";

export const HOME_TITLE_FIELD = "username";

export const HomeTitle = (record: THome): string => {
  return record.username?.toString() || String(record.id);
};
