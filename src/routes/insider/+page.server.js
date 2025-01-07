import db from "$lib/db.js";
import { error, redirect } from '@sveltejs/kit';
import { ObjectId } from "mongodb";


export async function load({ url }) {
  const hairtypeId = url.searchParams.get("hairtype");

  let insiders;
  if (hairtypeId) {
    insiders = await db.getInsidersByHairtype(hairtypeId);
  } else {
    insiders = await db.getInsiders();
  }

  return {
    insiders,
    hairtypeId,
  };
}

export const actions = {
  rate: async ({ request }) => {
    try {
      const formData = await request.formData();
      const insiderId = formData.get("insiderId");
      const rating = parseInt(formData.get("rating"));

      if (!ObjectId.isValid(insiderId)) {
        return { form: { success: false, error: "Invalid insider ID" } };
      }

      if (isNaN(rating) || rating < 1 || rating > 5) {
        return { form: { success: false, error: "Rating must be between 1 and 5" } };
      }

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
