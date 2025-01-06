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
          const insiderId = params.insider_id;
          if (!ObjectId.isValid(insiderId)) {
            throw error(400, 'Invalid insider ID');
          }
    
          const insider = await db.getInsider(insiderId);
          if (!insider) {
            throw error(404, 'insider not found');
          }
    
          const data = await request.formData();
const rating = parseInt(data.get("rating"));

          
          if (isNaN(rating) || rating < 1 || rating > 5) {
            throw error(400, 'Rating must be between 1 and 5');
          }
    
          const ratingResult = await db.createRating({
            insiderId: insiderId,
            rating: rating
          });
    
          if (!ratingResult) {
            throw error(500, 'Failed to add rating');
          }
    
          return {
            type: 'success',
            status: 200,
            body: {
              success: true,
              ratingId: ratingResult
            }
          };
        } catch (err) {
          console.error('Rating error:', err);
          throw error(err.status || 500, err.message);
        }
      }
    };