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

// Insider Filter by hairtype
export async function getInsidersByHairtype(hairtypeId) {
  try {
    const collection = db.collection("insiders");
    const query = { hairtype_id: hairtypeId };
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

// Get Insiders by hairtype name
export async function getInsidersByHairtypeName(hairtypeName) {
  try {
    const collection = db.collection("insiders");
    const query = { hairtype_id: hairtypeName };
    const results = await collection.find(query).toArray();
    results.forEach((insider) => {
      insider._id = insider._id.toString();
    });
    return results;
  } catch (error) {
    console.error("Error fetching insiders by hairtype name:", error);
    return [];
  }
}


// Function to calculate and update average rating for an insider
async function updateInsiderRating(insiderId) {
  try {
    const collectionRatings = db.collection("ratings");
    const collectionInsiders = db.collection("insiders");

    const ratings = await collectionRatings.find({ insiderId: new ObjectId(insiderId) }).toArray();

    if (ratings.length > 0) {
      const totalRating = ratings.length;
      const sumRating = ratings.reduce((sum, rating) => sum + rating.rating, 0);
      const ratingAvg = parseFloat((sumRating / totalRating).toFixed(1));

      await collectionInsiders.updateOne(
        { _id: new ObjectId(insiderId) },
        {
          $set: {
            ratingAvg,
            totalRating,
          },
        }
      );
    }
  } catch (error) {
    console.error("Error updating insider rating:", error);
  }
}


// Add rating
async function createRating(rating) {
  try {
    console.log("Creating rating with data:", rating);

    if (!rating.insiderId || !ObjectId.isValid(rating.insiderId)) {
      console.error("Invalid insider ID in createRating:", rating.insiderId);
      throw new Error("Invalid insider ID");
    }

    if (!rating.rating || isNaN(rating.rating) || rating.rating < 1 || rating.rating > 5) {
      console.error("Invalid rating value in createRating:", rating.rating);
      throw new Error("Invalid rating value");
    }

    const collection = db.collection("ratings");
    const ratingDoc = {
      insiderId: new ObjectId(rating.insiderId),
      rating: parseInt(rating.rating),
    };

    console.log("Inserting Rating Document:", ratingDoc);

    const result = await collection.insertOne(ratingDoc);
    await updateInsiderRating(rating.insiderId);

    console.log("Rating added successfully:", result.insertedId);

    return result.insertedId.toString();
  } catch (err) {
    console.error("Error in createRating:", err);
    throw err;
  }
}


export default {
  getHairTypes,
  getHairType,
  createInsider,
  getInsiders,
  getInsidersByHairtype,
  getInsidersByHairtypeName,
  createRating,
}
