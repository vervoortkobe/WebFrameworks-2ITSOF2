import { Controller, Get, Param } from "@nestjs/common";
import { MensenService } from "./mensen.service";
import { Mens } from "./mens.entity";

@Controller("mensen")
export class MensenController {
  constructor(private readonly mensenService: MensenService) {}

  @Get()
  findAll(): Mens[] {
    return this.mensenService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Mens {
    const numericId = parseInt(id, 10);
    return this.mensenService.findOne(numericId);
  }
}
