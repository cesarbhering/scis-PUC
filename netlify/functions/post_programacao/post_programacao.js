const { MongoClient } = require('mongodb');

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event, context) => {
  try {
    const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION);

    const data = JSON.parse(event.body);

    const docCount = await collection.countDocuments()

    data.code = docCount + 1

    const result = await collection.insertOne(data); // Insert the new document

    if (result.insertedId) {
      return { statusCode: 200, body: "Document created successfully" };
    } else {
      return { statusCode: 500, body: JSON.stringify(result) };
    }
  } catch (error) {
    return { statusCode: 502, body: error.toString() };
  }
};

module.exports = { handler };
