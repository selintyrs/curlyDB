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
            console.log("Form submission started");

            const data = await request.formData();
            const insiderId = data.get("insiderId");
            const rating = parseInt(data.get("rating"));

            console.log("Received Data:", { insiderId, rating });

            if (!ObjectId.isValid(insiderId)) {
                console.error("Invalid insider ID:", insiderId);
                throw error(400, "Invalid insider ID");
            }

            if (isNaN(rating) || rating < 1 || rating > 5) {
                console.error("Invalid rating value:", rating);
                throw error(400, "Rating must be between 1 and 5");
            }

            const ratingResult = await db.createRating({
                insiderId,
                rating,
            });

            console.log("Rating saved successfully:", ratingResult);
            return { success: true };
        } catch (err) {
            console.error("Error saving rating:", err);
            throw error(500, "Failed to save rating");
        }
    },
};
