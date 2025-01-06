import db from "$lib/db.js";
import { error, redirect } from '@sveltejs/kit';
import { ObjectId } from "mongodb";

export async function load({ params }) {
    try {
      const insiderId = params.insider_id;
      if (!ObjectId.isValid(insiderId)) {
        throw error(400, 'Invalid insider ID');
      }
  
      const insider = await db.getInsider(insiderId);
      if (!insider) {
        throw error(404, 'insider nicht gefunden');
      }
  
      const ratings = await db.getRatings(insiderId);
  
      return {
        insider,
        ratings
      };
    } catch (err) {
      throw error(500, err.message);
    }
  }

  export const actions = {
    create: async ({ request }) => {
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
  