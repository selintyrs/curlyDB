import db from "$lib/db.js"


export async function load() {
    console.log("Loaded Insiders Data:", insiders);


    return{
        insiders: await db.getInsiders()
        
        
    }
    
}