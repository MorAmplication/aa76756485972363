import { ArgsType, Field } from "@nestjs/graphql";
import { CreateInput } from "./CreateInput";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class CreateArgs {
    @Field(() => CreateInput)
    @ApiProperty({
        required: true,
        type: () => CreateInput
    })
    @Type(() => CreateInput)
    data!: CreateInput;
}

export { CreateArgs as CreateArgs };