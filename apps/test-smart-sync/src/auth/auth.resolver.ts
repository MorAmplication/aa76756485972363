import * as common from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AuthService } from "./auth.service";
import { GqlDefaultAuthGuard } from "./gqlDefaultAuth.guard";
import { UserData } from "./userData.decorator";
import { LoginArgs } from "./LoginArgs";
import { HomeInfo } from "./HomeInfo";

@Resolver(HomeInfo)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation(() => HomeInfo)
  async login(@Args() args: LoginArgs): Promise<HomeInfo> {
    return this.authService.login(args.credentials);
  }

  @Query(() => HomeInfo)
  @common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
  async homeInfo(@UserData() entityInfo: HomeInfo): Promise<HomeInfo> {
    return entityInfo;
  }
}
