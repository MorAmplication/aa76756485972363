import * as graphql from "@nestjs/graphql";
import { WithoutDtoResolverBase } from "./base/withoutDto.resolver.base";
import { WithoutDto } from "./base/WithoutDto";
import { WithoutDtoService } from "./withoutDto.service";

@graphql.Resolver(() => WithoutDto)
export class WithoutDtoResolver extends WithoutDtoResolverBase {
  constructor(protected readonly service: WithoutDtoService) {
    super(service);
  }
}
