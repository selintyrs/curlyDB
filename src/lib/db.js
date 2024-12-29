import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("CurlyDB"); // select database

// Get all hair types
async function getHairTypes() {
  let hairtypes = [];
  try {
    const collection = db.collection("hairtypes");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    const sort = { hairtype: 1 }; // sort by hairtype in ascending order

    // Get all objects that match the query
    hairtypes = await collection.find({}).sort(sort).toArray();
    hairtypes.forEach((hairtype) => {
      hairtype._id = hairtype._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return hairtypes;
}

// Get hair type by id
async function getHairType(id) {
  let hairtype = null;
  try {
      const collection = db.collection("hairtypes");
      const query = { _id: new ObjectId(id) }; // filter by id
      hairtype = await collection.findOne(query);

      if (!hairtype) {
          console.log("No hair type with id " + id);
          throw new Error(`Hair type with ID ${id} not found`);
      } else {
          hairtype._id = hairtype._id.toString();
      }
  } catch (error) {
      if (error instanceof TypeError) {
          console.error("Invalid ID format:", id);
      } else if (error.message.includes("not found")) {
          console.warn(error.message);
      } else {
          console.error("Unexpected error while fetching hair type:", error.message);
      }
      throw error;
  }
  return hairtype;
}

// Create Insider tips
async function createInsider(insiders) {
  

  try {
    const collection = db.collection("insiders");
    const result = await collection.insertOne(insiders);
    return result.insertedId.toString();
  } catch (error) {
    console.log(error);}
  }


  // Get 6 random insider tips
  async function getInsiders() {
    let insiders = [];
    try {
      const collection = db.collection("insiders");

     insiders = await collection.find({}).toArray(); // Alle Dokumente abrufen
      insiders.forEach((insider) => {
        insider._id = insider._id.toString(); // Konvertiere ObjectId zu String
      });
      
    } catch (error) {
      console.log("Error fetching all insiders:", error);
      return [];
    }
    console.log("All insiders fetched:", insiders); // Debugging
      return insiders;
  }



export default {
  getHairTypes,
  getHairType,
  createInsider,
  getInsiders}
