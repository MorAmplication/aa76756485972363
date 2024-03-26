/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VikaWhereUniqueInput } from "./VikaWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { VikaUpdateInput } from "./VikaUpdateInput";

@ArgsType()
class UpdateVikaArgs {
  @ApiProperty({
    required: true,
    type: () => VikaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VikaWhereUniqueInput)
  @Field(() => VikaWhereUniqueInput, { nullable: false })
  where!: VikaWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => VikaUpdateInput,
  })
  @ValidateNested()
  @Type(() => VikaUpdateInput)
  @Field(() => VikaUpdateInput, { nullable: false })
  data!: VikaUpdateInput;
}

export { UpdateVikaArgs as UpdateVikaArgs };