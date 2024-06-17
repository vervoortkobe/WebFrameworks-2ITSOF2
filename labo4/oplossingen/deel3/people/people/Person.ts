import * as moment from "moment"

export class Person
{
  constructor(public Firstname: string, public Name: string, public Birth: Date) {  }

  get Age()
  {
      return moment().diff(moment(this.Birth), 'years')
  }
}
