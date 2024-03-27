import { Module } from "@nestjs/common";
import { WithoutDtoModuleBase } from "./base/withoutDto.module.base";
import { WithoutDtoService } from "./withoutDto.service";
import { WithoutDtoController } from "./withoutDto.controller";
import { WithoutDtoResolver } from "./withoutDto.resolver";

@Module({
  imports: [WithoutDtoModuleBase],
  controllers: [WithoutDtoController],
  providers: [WithoutDtoService, WithoutDtoResolver],
  exports: [WithoutDtoService],
})
export class WithoutDtoModule {}
