import * as graphql from "@nestjs/graphql";
import { CreateArgs } from "../mor/CreateArgs";
import { Mor } from "../mor/Mor";
import { MorService } from "./mor.service";

export class MorResolver {
  constructor(protected readonly service: MorService) {}

  @graphql.Mutation(() => Mor)
  async CreateMor(
    @graphql.Args()
    args: CreateArgs
  ): Promise<Mor> {
    return this.service.CreateMor(args);
  }
}
