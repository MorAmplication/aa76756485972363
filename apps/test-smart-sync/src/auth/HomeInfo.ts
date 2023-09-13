import { Field, ObjectType } from "@nestjs/graphql";
import { Home } from "../home/base/Home";

@ObjectType()
export class HomeInfo implements Partial<Home> {
  @Field(() => String)
  id!: string;
  @Field(() => String)
  username!: string;
  @Field(() => [String])
  roles!: string[];
  @Field(() => String, { nullable: true })
  accessToken?: string;
}
