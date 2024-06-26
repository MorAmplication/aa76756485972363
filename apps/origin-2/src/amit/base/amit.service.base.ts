/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Amit as PrismaAmit } from "@prisma/client";

export class AmitServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AmitCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.AmitCountArgs>
  ): Promise<number> {
    return this.prisma.amit.count(args);
  }

  async amits<T extends Prisma.AmitFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AmitFindManyArgs>
  ): Promise<PrismaAmit[]> {
    return this.prisma.amit.findMany(args);
  }
  async amit<T extends Prisma.AmitFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AmitFindUniqueArgs>
  ): Promise<PrismaAmit | null> {
    return this.prisma.amit.findUnique(args);
  }
  async createAmit<T extends Prisma.AmitCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AmitCreateArgs>
  ): Promise<PrismaAmit> {
    return this.prisma.amit.create<T>(args);
  }
  async updateAmit<T extends Prisma.AmitUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AmitUpdateArgs>
  ): Promise<PrismaAmit> {
    return this.prisma.amit.update<T>(args);
  }
  async deleteAmit<T extends Prisma.AmitDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AmitDeleteArgs>
  ): Promise<PrismaAmit> {
    return this.prisma.amit.delete(args);
  }
}
