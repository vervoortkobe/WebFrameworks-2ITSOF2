import { Injectable } from '@nestjs/common';
import { Mens } from './mens.entity';

@Injectable()
export class MensenService {
  private mensen: Mens[] = [
    { id: 1, naam: 'Alice', leeftijd: 30 },
    { id: 2, naam: 'Bob', leeftijd: 25 },
    { id: 3, naam: 'Carol', leeftijd: 35 },
    { id: 4, naam: 'Dave', leeftijd: 40 },
    { id: 5, naam: 'Eve', leeftijd: 28 },
  ];

  findAll(): Mens[] {
    return this.mensen;
  }

  findOne(id: number): Mens {
    return this.mensen.find((mens) => mens.id === id);
  }
}
