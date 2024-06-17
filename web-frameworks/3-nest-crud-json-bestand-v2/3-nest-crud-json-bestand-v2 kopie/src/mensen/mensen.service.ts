import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import * as data from './data.json';
import { Mens } from '../entities/mens.entity';
import { readFileSync } from 'fs';
import { join } from 'path';
import { CreateMensDto } from '../dto/create-mens.dto'; // DTO = data transfer object ;-)
import { UpdateMensDto } from '../dto/update-mens.dto';

@Injectable()
export class MensenService {
  private mensen: Mens[];

  constructor() {
    this.loadJsonData();
  }

  private loadJsonData() {
    const filePath = join(__dirname, 'data.json');
    const rawData = readFileSync(filePath, 'utf8');
    this.mensen = JSON.parse(rawData) as Mens[];
  }

  findAll(): Mens[] {
    return this.mensen;
  }

  findOne(id: number): Mens {
    return this.mensen.find((mens) => mens.id === id);
  }

  createMens(createMensDto: CreateMensDto): Mens {
    const newMens: Mens = {
      id: this.mensen.length + 1,
      naam: createMensDto.naam,
      leeftijd: createMensDto.leeftijd,
    };

    this.mensen.push(newMens);
    return newMens;
  }

  updateMens(id: number, updateMensDto: UpdateMensDto): Mens {
    const mens = this.findOne(id);
    if (!mens) {
      throw new NotFoundException('Mens niet gevonden');
    }
    Object.assign(mens, updateMensDto);
    return mens;
  }

  destroyMens(id: number): void {
    const index = this.mensen.findIndex((mens) => mens.id === id);
    if (index !== -1) {
      this.mensen.splice(index, 1);
    }
  }
}
