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
            const data = await request.formData();
            console.log("Form Data Received:", Object.fromEntries(data));
            return { success: true };
        } catch (err) {
            console.error("Error in form submission:", err);
            throw error(500, "Form submission failed");
        }
    },
};
