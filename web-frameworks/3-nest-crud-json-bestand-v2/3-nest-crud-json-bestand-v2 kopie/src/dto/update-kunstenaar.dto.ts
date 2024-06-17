import { PartialType } from '@nestjs/mapped-types';
import { CreateKunstenaarDto } from './create-kunstenaar.dto';

export class UpdateKunstenaarDto extends PartialType(CreateKunstenaarDto) {}
