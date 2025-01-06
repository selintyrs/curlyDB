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
async function addRating(rating) {
  try {
    if (!rating.tip_id || !ObjectId.isValid(rating.tip_id)) {
      console.log("Invalid tip ID:", rating.tip_id);
      return null;
    }
    if (!rating.rating || isNaN(rating.rating) || rating.rating < 1 || rating.rating > 5) {
      console.log("Invalid rating:", rating.rating);
      return null;
    }

    const collection = db.collection("ratings");
    await collection.insertOne(rating);

    // Recalculate the average rating
    await updateInsiderRating(rating.tip_id);

    return true;
  } catch (error) {
    console.log("Error adding rating:", error);
    return null;
  }
}

async function updateInsiderRating(tipId) {
  try {
    const collection = db.collection("ratings");
    const result = await collection
      .aggregate([
        { $match: { tip_id: ObjectId(tipId) } },
        {
          $group: {
            _id: "$tip_id",
            averageRating: { $avg: "$rating" },
            totalRatings: { $sum: 1 },
          },
        },
      ])
      .toArray();

    if (result.length > 0) {
      const { averageRating, totalRatings } = result[0];

      await db.collection("insiders").updateOne(
        { _id: ObjectId(tipId) },
        { $set: { averageRating, totalRatings } }
      );
    }
  } catch (error) {
    console.log("Error updating insider rating:", error);
  }
}

module.exports = { addRating };





export default {
  getHairTypes,
  getHairType,
  createInsider,
  getInsiders,
  getInsidersByHairtype,
  addRating,
  updateInsiderRating
}
