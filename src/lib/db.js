import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";
import fetch from 'node-fetch';


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

    // Add default rating field if it doesn't exist
    if (!insiders.rating) {
      insiders.rating = {
        total: 0, // Total sum of ratings
        count: 0, // Number of ratings
      };
    }

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

// Create a rating for a tip
async function addRating(tipId, rating) {
  let result = null;
  
  try {
    const collection = db.collection("ratings");
    result = await collection.insertOne({
      tip_id: new ObjectId(tipId),
      rating: rating
    });
  } catch (error) {
    console.log("Error creating rating:", error);
    throw error;
  }
  
  return result;
}

// Get average rating for a tip
async function getTipRating(tipId) {
  try {
    const collection = db.collection("ratings");
    const result = await collection.aggregate([
      { $match: { tip_id: new ObjectId(tipId) } },
      { $group: {
          _id: '$tip_id',
          averageRating: { $avg: '$rating' },
          totalRatings: { $sum: 1 }
        }}
    ]).toArray();
    
    return result[0] || { averageRating: 0, totalRatings: 0 };
  } catch (error) {
    console.log("Error getting tip rating:", error);
    return { averageRating: 0, totalRatings: 0 };
  }
}




export default {
  getHairTypes,
  getHairType,
  createInsider,
  getInsiders,
  getInsidersByHairtype,
  addRating,
  getTipRating
}
