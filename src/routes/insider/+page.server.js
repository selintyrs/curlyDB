import { getInsiders, getInsidersByHairtype, getTipRating } from "$lib/db.js";

export async function load({ url }) {
  // Überprüfe, ob ein Filterparameter vorhanden ist
  const hairtypeId = url.searchParams.get("hairtype"); // URL-Parameter z.B. /insider?hairtype=1A
  
  let insiders;
  if (hairtypeId) {
    // wenn ein Filterparameter vorhanden ist, rufe die neue Funktion auf
    insiders = await getInsidersByHairtype(hairtypeId);
  } else {
    // Andernfalls alle Insider-Daten laden
    insiders = await getInsiders();
  }

  // Get ratings for each insider
  for (let insider of insiders) {
    const ratingData = await getTipRating(insider._id);
    insider.averageRating = ratingData.averageRating;
    insider.totalRatings = ratingData.totalRatings;
  }

  return {
    insiders,
    hairtypeId, // gib den aktuellen Filter zurück, falls nötig
  };
}