// import { Injectable } from '@angular/core';
// import { MongoClient } from 'mongodb';

// @Injectable({
//   providedIn: 'root'
// })
// export class MongoServiceService {
//   images: images[] | undefined;

//   getimages(){

//   }

//   constructor() { 
    
//   }
//   private client: MongoClient | undefined;
//   private url = 'mongodb://localhost:27017/mydatabase';

//   async connect() {
//     this.client = await MongoClient.connect(this.url, { useNewUrlParser: true });
//   }

//   async disconnect() {
//     await this.client.close();
//   }

//   getCollection(collectionName: string) {
//     return this.client.db().collection(collectionName);
//   }

// }
