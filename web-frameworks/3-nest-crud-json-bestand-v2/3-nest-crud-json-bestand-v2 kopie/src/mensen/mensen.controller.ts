import {
  Controller,
  Get,
  Patch,
  Post,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { MensenService } from './mensen.service';
import { Mens } from '../entities/mens.entity';
import { CreateMensDto } from '../dto/create-mens.dto';
import { UpdateMensDto } from '../dto/update-mens.dto';

@Controller('mensen')
export class MensenController {
  constructor(private readonly mensenService: MensenService) {}

  @Get()
  findAll(): Mens[] {
    return this.mensenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Mens {
    const numericId = parseInt(id, 10);
    return this.mensenService.findOne(numericId);
  }

  @Post()
  createMens(@Body() createMensDto: CreateMensDto): Mens {
    return this.mensenService.createMens(createMensDto);
  }

  // Gebruik de @Patch of @Put decorator, afhankelijk van of je gedeeltelijke of volledige updates wilt toestaan.
  @Patch(':id')
  updateMens(
    @Param('id') id: string,
    @Body() updateMensDto: UpdateMensDto,
  ): Mens {
    return this.mensenService.updateMens(parseInt(id, 10), updateMensDto);
  }

  @Delete(':id')
  destroyMens(@Param('id') id: string): void {
    this.mensenService.destroyMens(parseInt(id, 10));
  }
}
