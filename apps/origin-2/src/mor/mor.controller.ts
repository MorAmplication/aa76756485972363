import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MorService } from "./mor.service";
import { CreateArgs } from "../mor/CreateArgs";
import { Mor } from "../mor/Mor";

@swagger.ApiTags("mors")
@common.Controller("mors")
export class MorController {
  constructor(protected readonly service: MorService) {}

  @common.Get("/:id/create-mor")
  @swagger.ApiOkResponse({
    type: Mor
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateMor(
    @common.Body()
    body: CreateArgs
  ): Promise<Mor> {
        return this.service.CreateMor(body);
      }
}
