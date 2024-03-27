/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { WithoutDtoService } from "../withoutDto.service";
import { WithoutDtoCreateInput } from "./WithoutDtoCreateInput";
import { WithoutDto } from "./WithoutDto";
import { WithoutDtoFindManyArgs } from "./WithoutDtoFindManyArgs";
import { WithoutDtoWhereUniqueInput } from "./WithoutDtoWhereUniqueInput";
import { WithoutDtoUpdateInput } from "./WithoutDtoUpdateInput";

export class WithoutDtoControllerBase {
  constructor(protected readonly service: WithoutDtoService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WithoutDto })
  async createWithoutDto(
    @common.Body() data: WithoutDtoCreateInput
  ): Promise<WithoutDto> {
    return await this.service.createWithoutDto({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [WithoutDto] })
  @ApiNestedQuery(WithoutDtoFindManyArgs)
  async withoutDtos(@common.Req() request: Request): Promise<WithoutDto[]> {
    const args = plainToClass(WithoutDtoFindManyArgs, request.query);
    return this.service.withoutDtos({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WithoutDto })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async withoutDto(
    @common.Param() params: WithoutDtoWhereUniqueInput
  ): Promise<WithoutDto | null> {
    const result = await this.service.withoutDto({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: WithoutDto })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateWithoutDto(
    @common.Param() params: WithoutDtoWhereUniqueInput,
    @common.Body() data: WithoutDtoUpdateInput
  ): Promise<WithoutDto | null> {
    try {
      return await this.service.updateWithoutDto({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: WithoutDto })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWithoutDto(
    @common.Param() params: WithoutDtoWhereUniqueInput
  ): Promise<WithoutDto | null> {
    try {
      return await this.service.deleteWithoutDto({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}