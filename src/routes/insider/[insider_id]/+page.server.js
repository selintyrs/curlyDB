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
    create: async ({ params, request }) => {
        try {
            const formData = await request.formData();
            const insiderId = formData.get("insiderId");
            const rating = parseInt(formData.get("rating"));

            // Debugging logs
            console.log("Form Data:", { insiderId, rating });

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
                rating
            });

            if (!ratingResult) {
                console.error("Failed to save rating");
                throw error(500, "Failed to save rating");
            }

            console.log("Rating successfully saved:", ratingResult);

            return {
                type: "success",
                status: 200,
                body: {
                    success: true,
                    ratingId: ratingResult
                }
            };
        } catch (err) {
            console.error("Error in create action:", err);
            throw error(500, "Failed to save rating");
        }
    }
};

