import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import * as data from './data.json';
import { Kunstenaar } from '../entities/kunstenaar.entity';
import { readFileSync } from 'fs';
import { join } from 'path';
import { CreateKunstenaarDto } from '../dto/create-kunstenaar.dto'; // DTO = data transfer object ;-)
import { UpdateKunstenaarDto } from '../dto/update-kunstenaar.dto';

@Injectable()
export class KunstenaarsService {
  private kunstenaars: Kunstenaar[];

  constructor() {
    this.loadJsonData();
  }

  private loadJsonData() {
    const filePath = join(__dirname, 'data.json');
    const rawData = readFileSync(filePath, 'utf8');
    this.kunstenaars = JSON.parse(rawData) as Kunstenaar[];
  }

  findAll(): Kunstenaar[] {
    return this.kunstenaars;
  }

  findOne(id: number): Kunstenaar {
    return this.kunstenaars.find((kunstenaar) => kunstenaar.id === id);
  }

  create(createKunstenaarDto: CreateKunstenaarDto): Kunstenaar {
    const newKunstenaar: Kunstenaar = {
      id: this.kunstenaars.length + 1,
      voornaam: createKunstenaarDto.voornaam,
      familienaam: createKunstenaarDto.familienaam,
      geboorte_gegevens: createKunstenaarDto.geboorte_gegevens,
      overlijden_gegevens: createKunstenaarDto.overlijden_gegevens,
      locatie_activiteit: createKunstenaarDto.locatie_activiteit,
      biografie: createKunstenaarDto.biografie,
      activiteiten: createKunstenaarDto.activiteiten,
    };

    this.kunstenaars.push(newKunstenaar);
    return newKunstenaar;
  }

  update(id: number, updateKunstenaarDto: UpdateKunstenaarDto): Kunstenaar {
    const kunstenaar = this.findOne(id);
    if (!kunstenaar) {
      throw new NotFoundException('Kunstenaar niet gevonden');
    }
    Object.assign(kunstenaar, updateKunstenaarDto);
    return kunstenaar;
  }

  destroy(id: number): void {
    const index = this.kunstenaars.findIndex(
      (kunstenaar) => kunstenaar.id === id,
    );
    if (index !== -1) {
      this.kunstenaars.splice(index, 1);
    }
  }
}
