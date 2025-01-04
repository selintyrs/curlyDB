import db from "$lib/db.js";

export async function load({ url }) {
  // Überprüfe, ob ein Filterparameter vorhanden ist
  const hairtypeId = url.searchParams.get("hairtype"); // URL-Parameter z.B. /insider?hairtype=1A

  let insiders;
  if (hairtypeId) {
    // Wenn ein Filterparameter vorhanden ist, rufe die neue Funktion auf
    insiders = await db.getInsidersByHairtype(hairtypeId);
  } else {
    // Andernfalls alle Insider-Daten laden
    insiders = await db.getInsiders();
  }

  return {
    insiders,
    hairtypeId, // Gib den aktuellen Filter zurück, falls nötig
  };
}



export const actions = {
  update: async ({ request }) => {
    try {
      const data = await request.formData();
      const insiders = {
        _id: data.get("_id"),
        rating: parseInt(data.get("rating")), // Parse rating as an integer
        
      };

      console.log("Form Data Received:", insiders);

      await db.updateInsider(insiders);
      return { success: true };
    } catch (error) {
      console.error("Fehler in update Action:", error);
      return { success: false, error: error.message };
    }
  },
};
