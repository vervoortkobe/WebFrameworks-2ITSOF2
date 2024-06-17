import { ObjectId } from "mongodb";

export interface DiaryPost {
    _id?: ObjectId;
    text: string;
    date: string;
}