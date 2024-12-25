import db from "$lib/db.js";

export async function load({ params }) {
    return {
      hairtype: await db.getArtist(params.hairtype_id)
    };
  }