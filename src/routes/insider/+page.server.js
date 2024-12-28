import db from "$lib/db.js"

export async function load() {

    return{
        insiders: await db.createInsider()
        
    }
    
}