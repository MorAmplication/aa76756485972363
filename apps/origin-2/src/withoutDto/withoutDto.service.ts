import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WithoutDtoServiceBase } from "./base/withoutDto.service.base";

@Injectable()
export class WithoutDtoService extends WithoutDtoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
