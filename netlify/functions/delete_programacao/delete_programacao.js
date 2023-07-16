const { MongoClient, ObjectId } = require('mongodb');

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event, context) => {
  try {
    const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION);
    // Delete the document using the MongoDB deleteOne command
    const data = JSON.parse(event.body)
    const docId = { _id: new ObjectId(data._id) }; // Specify the document ID to delete
    const result = await collection.deleteOne(docId)

    if (result.deletedCount === 1) {
      return { statusCode: 200, body: "Document deleted successfully" };
    } else {
      return { statusCode: 404, body: "Document not found" };
    }
  } catch (error) {
    return { statusCode: 502, body: error.toString() };
  }
};

module.exports = { handler };
