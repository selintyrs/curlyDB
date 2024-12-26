import db from "$lib/db.js";

export async function load({ params }) {
  return {
    hairtype: {
      _id: params.hairtype_id,
      ...(await db.getArtist(params.hairtype_id))
    }
  }
}