import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateKunstenaarDto } from '../dto/create-kunstenaar.dto';
import { UpdateKunstenaarDto } from '../dto/update-kunstenaar.dto';
import { Kunstenaar, KunstenaarDocument } from '../schema/kunstenaar.schema';

@Injectable()
export class KunstenaarService {
  constructor(
    @InjectModel(Kunstenaar.name)
    private readonly kunstenaarModel: Model<KunstenaarDocument>,
  ) {}

  async create(
    createKunstenaarDto: CreateKunstenaarDto,
  ): Promise<KunstenaarDocument> {
    const kunstenaar = new this.kunstenaarModel(createKunstenaarDto);
    return kunstenaar.save();
  }

  async findAll(): Promise<KunstenaarDocument[]> {
    return this.kunstenaarModel.find().exec();
  }

  async findOne(id: string) {
    return this.kunstenaarModel.findById(id);
  }

  async update(
    id: string,
    updateKunstenaarDto: UpdateKunstenaarDto,
  ): Promise<KunstenaarDocument> {
    return this.kunstenaarModel.findByIdAndUpdate(id, updateKunstenaarDto);
  }

  async remove(id: string) {
    return this.kunstenaarModel.findOneAndDelete({ _id: id });
  }
}
