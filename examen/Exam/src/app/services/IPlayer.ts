
//interface to be used for the personal info
export interface IPlayer {
    Fullname: string;
    Username : string;
    Email: string;
    Level: Level  
}

export enum Level{
    Easy,
    Expert
}

//interface to be used to save/retrieve the scores
export interface IScore
{
  Username: string;
  Score: number;
  Date: Date;
}