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
      console.log("Form Data Received:", Object.fromEntries(data));


      let insiders = {
        hairtype_id: data.get("hairtype_id"),
        rating: {
          total: data.get("rating.total"), // Falls total ein Unterfeld von rating ist
          count: data.get("rating.count"),
          average: data.get("rating.average"),

        },
      };

      await db.updateRating(insiders);
      return { success: true };
    } catch (error) {
      console.error("Error in create action:", error); // Debugging
      return { success: false, error: error.message };
    }
  },
};