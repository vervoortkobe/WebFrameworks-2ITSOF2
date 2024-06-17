import { PartialType } from '@nestjs/mapped-types';
import { CreateMensDto } from './create-mens.dto';

export class UpdateMensDto extends PartialType(CreateMensDto) {}
