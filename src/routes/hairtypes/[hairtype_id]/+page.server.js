import db from "$lib/db.js";

export async function load({ params }) {
    return {
        movie: {
            _id: params.hairtype_id,
            ...(await db.getMovie(params.hairtype_id_id)),
        }    }
}