const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require("dotenv")

dotenv.config("../../.env")

const uri = process.env.DATABASE_CONNECTION_STRING

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function connect() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
    }
}

connect();


const db = client.db("flag-quiz");

module.exports = db;