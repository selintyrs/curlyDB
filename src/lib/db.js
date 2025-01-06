import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";


const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("CurlyDB");

// Get all hair types
async function getHairTypes() {
  let hairtypes = [];
  try {
    const collection = db.collection("hairtypes");
    const query = {};
    const sort = { hairtype: 1 }; // ascending order

    hairtypes = await collection.find({}).sort(sort).toArray();
    hairtypes.forEach((hairtype) => {
      hairtype._id = hairtype._id.toString();
    });
  } catch (error) {
    console.log(error);

  }
  return hairtypes;
}

// Get hair type by id
async function getHairType(id) {
  let hairtype = null;
  try {
    const collection = db.collection("hairtypes");
    const query = { _id: new ObjectId(id) };
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
    console.log(error);
  }
}

// Get all insiders
async function getInsiders() {
  let insiders = [];
  try {
    const collection = db.collection("insiders");
    const query = {};

    insiders = await collection.aggregate([{ $sample: { size: 100 } }]).toArray();
    insiders.forEach((insider) => {
      insider._id = insider._id.toString();
    });

  } catch (error) {
    console.log("Error fetching all insiders:", error);
  }
  return insiders;
}

// Get insiders by hairtype
export async function getInsidersByHairtype(hairtypeId) {
  try {
    const collection = db.collection("insiders");
    const results = await collection.find({ hairtype_id: hairtypeId }).toArray();
    results.forEach(insider => {
      insider._id = insider._id.toString();
    });
    return results;
  } catch (error) {
    console.error("Error fetching insiders by hairtype:", error);
    return [];
  }
}

//Get insiders by ID
async function getInsider(id) {
  let insider = null;
  try {
    const collection = db.collection("insiders");
    const query = { _id: new ObjectId(id) };
    insider = await collection.findOne(query);

    if (!insider) {
      console.log("No hair type with id " + id);
      throw new Error(`Hair type with ID ${id} not found`);
    } else {
      insider._id = insider._id.toString();
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
  return insider;
}

// Add rating
async function createRating(rating) {
  try {
    if (!rating.insiderId || !ObjectId.isValid(rating.insiderId)) {
      throw new Error("Invalid insider ID");
    }
    if (!rating.rating || isNaN(rating.rating) || rating.rating < 1 || rating.rating > 5) {
      throw new Error("Invalid rating value");
    }

    const collection = db.collection("ratings");
    const ratingDoc = {
      insiderId: new ObjectId(rating.insiderId),
      rating: parseInt(rating.rating),
      timestamp: new Date()
    };

    const result = await collection.insertOne(ratingDoc);
    console.log("Rating added successfully:", result.insertedId);
    return result.insertedId.toString();
  } catch (error) {
    console.error("Error adding rating:", error);
    return null;
  }
}

async function getRatings(insiderId) {
  try {
    if (!insiderId || !ObjectId.isValid(insiderId)) {
      console.error('Invalid insiderId format:', insiderId);
      return [];
    }

    const collection = db.collection("ratings");
    const ratings = await collection.find({
      insiderId: new ObjectId(insiderId)
    })
    .toArray();

    return ratings.map(rating => ({
      ...rating,
      _id: rating._id.toString(),
      insiderId: rating.insiderId.toString(),
      rating: parseInt(rating.rating),
    }));
  } catch (error) {
    console.error('Error getting ratings:', error);
    return [];
  }
}






export default {
  getHairTypes,
  getHairType,
  createInsider,
  getInsiders,
  getInsidersByHairtype,
  getInsider,
  createRating,
  getRatings
  
}
