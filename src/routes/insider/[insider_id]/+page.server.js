import db from "$lib/db.js";

export async function load({ params }) {
  const insider = await db.getInsider(params.insider_id);
  return {
    insider: {
      _id: params.insider_id,
      ...insider,
    }
  }
}
