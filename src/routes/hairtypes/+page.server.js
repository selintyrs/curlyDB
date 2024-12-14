import db from "$lib/db.js"

export async function load() {

    return{
        hairtypes: await db.getHairTypes()
        
    }
    
}