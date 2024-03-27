import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WithoutDtoService } from "./withoutDto.service";
import { WithoutDtoControllerBase } from "./base/withoutDto.controller.base";

@swagger.ApiTags("withoutDtos")
@common.Controller("withoutDtos")
export class WithoutDtoController extends WithoutDtoControllerBase {
  constructor(protected readonly service: WithoutDtoService) {
    super(service);
  }
}
