import db from "$lib/db.js";

export async function load({ params }) {
  const hairtype = await db.getHairType(params.hairtype_id); // Lade Haartyp-Daten
  const insiders = await db.getInsidersByHairtype(params.hairtype_id); // Lade Insider-Tipps für den Haartyp
  
  return {
    hairtype: {
      _id: params.hairtype_id,
      ...hairtype,
    },
    insiders, // Gib die Insider-Daten zurück
  };
}
