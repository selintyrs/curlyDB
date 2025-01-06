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
            console.log("Received request to create rating");
            
            const insiderId = params.insider_id;
            console.log("Insider ID:", insiderId);

            if (!ObjectId.isValid(insiderId)) {
                console.error("Invalid Insider ID");
                throw error(400, 'Invalid insider ID');
            }

            const insider = await db.getInsider(insiderId);
            if (!insider) {
                console.error("Insider not found for ID:", insiderId);
                throw error(404, 'Insider not found');
            }
            console.log("Insider found:", insider);

            const data = await request.formData();
            const rating = parseInt(data.get("rating"));
            console.log("Parsed rating:", rating);

            if (isNaN(rating) || rating < 1 || rating > 5) {
                console.error("Invalid rating value:", rating);
                throw error(400, 'Rating must be between 1 and 5');
            }

            const ratingResult = await db.createRating({
                insiderId: insiderId,
                rating: rating
            });

            if (!ratingResult) {
                console.error("Failed to insert rating");
                throw error(500, 'Failed to add rating');
            }

            console.log("Rating successfully added:", ratingResult);

            return {
                type: 'success',
                status: 200,
                body: {
                    success: true,
                    ratingId: ratingResult
                }
            };
        } catch (err) {
            console.error('Error in create action:', err);
            throw error(err.status || 500, err.message);
        }
    }
};
