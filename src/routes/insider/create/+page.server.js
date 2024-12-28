import db from "$lib/db.js";


export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        let insiders = {
            hairtype_id = data.get("hairtype_id"),
            tip_for = data.get("tip_for"),
            tip_text = data.get("tip_text"),
        }
        await db.createInsider(insiders);
        return { success: true };
    }
}
