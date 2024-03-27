import { WithoutDto as TWithoutDto } from "../api/withoutDto/WithoutDto";

export const WITHOUTDTO_TITLE_FIELD = "id";

export const WithoutDtoTitle = (record: TWithoutDto): string => {
  return record.id?.toString() || String(record.id);
};
