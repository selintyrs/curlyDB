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

export async function _POST({ request }) {
  try {
    const { insiderId, newRating } = await request.json();

    if (!insiderId || !newRating || newRating < 1 || newRating > 5) {
      return new Response("Invalid data", { status: 400 });
    }

    const success = await db.addRating(insiderId, newRating);

    if (success) {
      return new Response("Rating added successfully", { status: 200 });
    } else {
      return new Response("Failed to add rating", { status: 500 });
    }
  } catch (error) {
    console.error("Error handling rating submission:", error);
    return new Response("Server error", { status: 500 });
  }
}