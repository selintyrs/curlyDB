import db from "$lib/db.js";

export async function load({ params }) {
  const hairtype = await db.getHairType(params.hairtype_id);
  return {
    props: {
      hairtype: {
        _id: params.hairtype_id,
        ...hairtype,
      }
    }
  };
}