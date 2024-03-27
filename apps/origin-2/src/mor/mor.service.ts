import { Injectable } from "@nestjs/common";
import { CreateArgs } from "../mor/CreateArgs";
import { Mor } from "../mor/Mor";

@Injectable()
export class MorService {
  constructor() {}
  async CreateMor(args: CreateArgs): Promise<Mor> {
    throw new Error("Not implemented");
  }
}
