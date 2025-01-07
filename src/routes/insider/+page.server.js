import db from "$lib/db.js";
import { error, redirect } from '@sveltejs/kit';
import { ObjectId } from "mongodb";


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
  rate: async ({ request }) => {
    try {
      const formData = await request.formData();
      const insiderId = formData.get("insiderId");
      const rating = parseInt(formData.get("rating"));

      // Validate `insiderId`
      if (!ObjectId.isValid(insiderId)) {
        return { form: { success: false, error: "Invalid insider ID" } };
      }

      // Validate `rating`
      if (isNaN(rating) || rating < 1 || rating > 5) {
        return { form: { success: false, error: "Rating must be between 1 and 5" } };
      }

      // Speichert das Rating in der Datenbank
      const ratingResult = await db.createRating({
        insiderId,
        rating
      });

      if (!ratingResult) {
        return { form: { success: false, error: "Failed to save rating" } };
      }

      return { form: { success: true, ratingId: ratingResult } };
    } catch (err) {
      console.error("Error in rate action:", err);
      return { form: { success: false, error: "Failed to save rating" } };
    }
  }
};
