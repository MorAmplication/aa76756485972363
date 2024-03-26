import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { EnumColor } from "./EnumColor";

@ObjectType("MorObject")
class Mor {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    name!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    lastName!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    age!: string;

    @Field(() => EnumColor)
    @ApiProperty({
        required: true,
        enum: EnumColor
    })
    color!: "green" | "red" | "blue" | "purple";
}

export { Mor as Mor };