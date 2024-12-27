import db from "$lib/db.js";

export const actions = {
  create: async ({ request }) => {
    try {
      const data = await request.formData();
      const hairtype_id = data.get("hairtype_id");
      const tip_for = data.get("tip_for");
      const tip_text = data.get("tip_text");

      if (!hairtype_id || !tip_for || !tip_text) {
        return { success: false, error: "All fields are required." };
      }

      const insiderTip = {
        hairtype_id,
        tip_for,
        tip_text,
        submitted_by: "anonymous", // Or capture the user's identity if available
        created_at: new Date(),
      };

      await db.createInsider(insiderTip);
      return { success: true };
    } catch (error) {
      console.error("Error submitting insider tip:", error);
      return { success: false, error: "Failed to save the tip." };
    }
  },
};
