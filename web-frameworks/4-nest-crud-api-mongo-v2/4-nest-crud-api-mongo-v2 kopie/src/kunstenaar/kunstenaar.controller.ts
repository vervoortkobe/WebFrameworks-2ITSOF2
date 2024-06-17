import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { KunstenaarService } from './kunstenaar.service';
import { CreateKunstenaarDto } from '../dto/create-kunstenaar.dto';
import { UpdateKunstenaarDto } from '../dto/update-kunstenaar.dto';

@Controller('kunstenaar')
export class KunstenaarController {
  constructor(private readonly kunstenaarService: KunstenaarService) {}

  @Post()
  create(@Body() createKunstenaarDto: CreateKunstenaarDto) {
    return this.kunstenaarService.create(createKunstenaarDto);
  }

  @Get()
  findAll() {
    return this.kunstenaarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kunstenaarService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateKunstenaarDto: UpdateKunstenaarDto,
  ) {
    return this.kunstenaarService.update(id, updateKunstenaarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kunstenaarService.remove(id);
  }
}
