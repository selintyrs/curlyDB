import db from "$lib/db.js";

export async function load({ params }) {
  return {
    hairtype: {
      _id: params.hairtype_id,
      ...(await db.getHairType(params.hairtype_id))
    }
  }
}