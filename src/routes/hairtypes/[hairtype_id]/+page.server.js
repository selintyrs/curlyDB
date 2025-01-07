import db from "$lib/db.js";
import { error } from "@sveltejs/kit";
import { ObjectId } from "mongodb";

export async function load({ params }) {
  try{
    const hairtypeId = params.hairtype_id;
    if (!ObjectId.isValid(hairtypeId)) {
     throw error(404, "Invalid hairtype ID");
      }
    const hairtype = await db.getHairType(hairtypeId); 
    if (!hairtype) {
      throw error(404, "Hair type not found");
    }

    const insiders = await db.getInsidersByHairtype(hairtypeId);

  return {
    hairtype,
    insiders,
    };
} catch (error) {
  console.error("Error in load function:", error);
  return error;
}
}
