import db from "$lib/db.js";
import { error, redirect } from '@sveltejs/kit';
import { ObjectId } from "mongodb";

export async function load({ params }) {
  const hairtype = await db.getInsider(params.insider_id);
  return {
    insider: {
      _id: params.insider_id,
      ...insider,
    }
  }
}

export const actions = {
    addRating: async ({ request }) => {
      try {
        const data = await request.formData();
        console.log("Form data received:", Object.fromEntries(data));
        return { success: true };
      } catch (error) {
        console.error("Error handling form submission:", error);
        throw error(500, "Server error");
      }
    },
  };
  