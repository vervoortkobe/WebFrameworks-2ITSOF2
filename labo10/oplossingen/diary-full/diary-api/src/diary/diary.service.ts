import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';
import { DiaryPost } from 'src/types';

@Injectable()
export class DiaryService implements OnModuleInit, OnModuleDestroy {
    public uri : string = "mongodb+srv://login:password@webframeworks.mc5xy0s.mongodb.net/?retryWrites=true&w=majority";
    public client = new MongoClient(this.uri, { serverApi: ServerApiVersion.v1 });

    constructor() {
    }

    onModuleInit() {
        this.client.connect();
    }

    onModuleDestroy() {
        this.client.close();
    }

    public async createPost(post: DiaryPost) {
        let inserted = await this.client.db("WebFrameworks").collection("Posts").insertOne(post);
        return await this.getPost(inserted.insertedId.toString());
    }

    public async getPost(id: string) {
        const post = await this.client.db("WebFrameworks").collection("Posts").findOne<DiaryPost>({ _id: new ObjectId(id) });
        return post;
    }


    public async getPosts() {
        const posts = await this.client.db("WebFrameworks").collection("Posts").find<DiaryPost>({}).sort({"date":-1}).toArray();
        return posts;
    }

    public async deletePost(id: string) {
        this.client.db("WebFrameworks").collection("Posts").deleteOne({ _id: new ObjectId(id) });
    }

    public async updatePost(id: string, post: DiaryPost) {
        this.client.db("WebFrameworks").collection("Posts").updateOne({ _id: new ObjectId(id) }, { $set: post });
        return await this.getPost(id);
    }
    


}
