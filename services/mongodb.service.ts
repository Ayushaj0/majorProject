import { MongoClient, Collection, Db } from 'mongodb';

export class MongoDBService {
  // ...existing code...

  async connect() {
    try {
      await this.client.connect();
      this.db = this.client.db(this.dbName);
      this.collection = this.db.collection(this.collectionName);
      console.log(`MongoDB Connected: ${this.client.options.hosts?.[0]}`);
      console.log(`Using database: ${this.dbName}, collection: ${this.collectionName}`);
      return true;
    } catch (error) {
      console.error('MongoDB connection error:', error);
      throw error;
    }
  }
  
  isConnected(): boolean {
    return this.client?.topology?.isConnected() || false;
  }
  // ...existing code...
}
