import db from "$lib/db.js";

export async function load({ params }) {
  const hairtypeId = url.searchParams.get("hairtype");

  // Hole den Haartyp aus der Datenbank
  const hairtype = await db.getHairType(hairtypeId);

  // Hole alle Insiders mit der passenden hairtype_id
  const insiders = await db.getInsidersByHairtype(hairtypeId);

  return {
    hairtype: {
      _id: hairtypeId,
      ...hairtype,
    },
    insiders // Füge die Insiders hinzu
  };
}
