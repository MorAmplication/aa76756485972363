import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateArgs } from "../mor/CreateArgs";
import { Mor } from "../mor/Mor";

@Injectable()
export class MorService {
  constructor(protected readonly prisma: PrismaService) {}
  async CreateMor(args: CreateArgs): Promise<Mor> {
    throw new Error("Not implemented");
  }
}
