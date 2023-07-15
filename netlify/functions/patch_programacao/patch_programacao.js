const { MongoClient, ObjectId } = require('mongodb');

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event, context) => {
  try {
    const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION);
    // Update the document using the MongoDB update command
    const data = JSON.parse(event.body)
    const docId = { _id: new ObjectId(data._id) }; // Specify the document ID to update
    delete data._id
    const result = await collection.replaceOne(docId, data)

    if (result.modifiedCount === 1) {
      return { statusCode: 200, body: "Document updated successfully" };
    } else {
      return { statusCode: 404, body: "Document not found" };
    }
  } catch (error) {
    return { statusCode: 502, body:  error.toString() };
  }
};

module.exports = { handler };
