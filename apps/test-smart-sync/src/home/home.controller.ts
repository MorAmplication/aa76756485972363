import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HomeService } from "./home.service";
import { HomeControllerBase } from "./base/home.controller.base";

@swagger.ApiTags("homes")
@common.Controller("homes")
export class HomeController extends HomeControllerBase {
  constructor(
    protected readonly service: HomeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
