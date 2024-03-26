import { registerEnumType } from "@nestjs/graphql";

export enum EnumColor {
    Green = "green",
    Red = "red",
    Blue = "blue",
    Purple = "purple"
}

registerEnumType(EnumColor, {
    name: "EnumColor",
  });