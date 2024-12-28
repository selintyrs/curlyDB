import db from "$lib/db.js";




export const actions = {
    create: async ({ request }) => {
      try {
        const data = await request.formData();
        console.log("Form Data Received:", Object.fromEntries(data)); // Debugging
        
        let insiders = {
          hairtype_id: data.get("hairtype_id"),
          tip_for: data.get("tip_for"),
          tip_text: data.get("tip_text"),
        };
  
        console.log("Insiders Data:", insiders); // Debugging
        
        if (!insiders.hairtype_id || !insiders.tip_for || !insiders.tip_text) {
          throw new Error("Validation error: Missing fields");
        }
  
        await db.createInsider(insiders);
        return { success: true };
      } catch (error) {
        console.error("Error in create action:", error); // Debugging
        return { success: false, error: error.message };
      }
    },
  };
  