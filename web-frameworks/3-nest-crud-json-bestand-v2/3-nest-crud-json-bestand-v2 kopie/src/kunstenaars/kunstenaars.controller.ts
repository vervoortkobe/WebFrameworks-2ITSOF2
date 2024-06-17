import {
  Controller,
  Get,
  Patch,
  Post,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { KunstenaarsService } from './kunstenaars.service';
import { Kunstenaar } from '../entities/kunstenaar.entity';
import { CreateKunstenaarDto } from '../dto/create-kunstenaar.dto';
import { UpdateKunstenaarDto } from '../dto/update-kunstenaar.dto';

@Controller('kunstenaar')
export class KunstenaarsController {
  constructor(private readonly kunstenaarsService: KunstenaarsService) {}

  @Get()
  findAll(): Kunstenaar[] {
    return this.kunstenaarsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Kunstenaar {
    const numericId = parseInt(id, 10);
    return this.kunstenaarsService.findOne(numericId);
  }

  @Post()
  create(@Body() createKunstenaarDto: CreateKunstenaarDto): Kunstenaar {
    return this.kunstenaarsService.create(createKunstenaarDto);
  }

  // Gebruik de @Patch of @Put decorator, afhankelijk van of je gedeeltelijke of volledige updates wilt toestaan.
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateKunstenaarDto: UpdateKunstenaarDto,
  ): Kunstenaar {
    return this.kunstenaarsService.update(
      parseInt(id, 10),
      updateKunstenaarDto,
    );
  }

  @Delete(':id')
  destroy(@Param('id') id: string): void {
    this.kunstenaarsService.destroy(parseInt(id, 10));
  }
}
