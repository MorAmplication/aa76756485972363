import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HomeModuleBase } from "./base/home.module.base";
import { HomeService } from "./home.service";
import { HomeController } from "./home.controller";
import { HomeResolver } from "./home.resolver";

@Module({
  imports: [HomeModuleBase, forwardRef(() => AuthModule)],
  controllers: [HomeController],
  providers: [HomeService, HomeResolver],
  exports: [HomeService],
})
export class HomeModule {}
