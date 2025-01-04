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
  default: async ({ request }) => {
    const formData = await request.formData();
    const insiderId = formData.get("insiderId");
    const newRating = parseInt(formData.get("rating"), 10);

    if (!insiderId || !newRating || newRating < 1 || newRating > 5) {
      return { success: false, message: "Invalid input." };
    }

    const success = await db.addRating(insiderId, newRating);

    if (success) {
      return { success: true, message: "Rating added successfully." };
    } else {
      return { success: false, message: "Failed to add rating." };
    }
  },
};
