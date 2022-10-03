import { MongoClient } from "mongodb";

export async function connectToDb() {
  // mongodb+srv://<username>:<password>@cluster0.6biak.mongodb.net/?retryWrites=true&w=majority
  const client = await MongoClient.connect(
    "mongodb+srv://Ruturaj:ruturaj@cluster0.6biak.mongodb.net/next-places?retryWrites=true&w=majority"
  );
  return client;
}
