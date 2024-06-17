import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type KunstenaarDocument = Kunstenaar & Document;

@Schema()
export class Kunstenaar {
  @Prop()
  Voornaam: string;

  @Prop()
  Familienaam: string;

  @Prop()
  Geboorte_gegevens: string;

  @Prop()
  Overlijden_gegevens: string;

  @Prop()
  Locatie_activiteit: string;

  @Prop()
  Biografie: string;

  @Prop()
  Activiteiten: string;
}

export const KunstenaarSchema = SchemaFactory.createForClass(Kunstenaar);
