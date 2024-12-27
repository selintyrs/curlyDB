import db from "$lib/db.js";

export const actions = {
    create: async ({request}) => {
        const data = await request.formData();
        let hairtype = {
            name: data.get("name"),
            for: data.get("tip_for"),
            what: data.get("tip_text"),
        }
        await db.createInsider(insiders);
        return {success: true}
    }
}