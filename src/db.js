import {MongoClient, ObjectId} from 'mongodb'

const DB = () => {

  connect = async function() {
    const MONGO_URL = 'mongodb://localhost:27017/blog'
    const db = await MongoClient.connect(MONGO_URL)
  }
}

export default DB;
