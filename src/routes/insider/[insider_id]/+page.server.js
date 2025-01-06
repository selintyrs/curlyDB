import db from "$lib/db.js";

export async function load({ params }) {
  const hairtype = await db.getInsider(params.insider_id);
  return {
    insider: {
      _id: params.insider_id,
      ...insider,
    }
  }
}
