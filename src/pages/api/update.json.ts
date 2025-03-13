import type { APIRoute } from 'astro'; 

export const POST: APIRoute = async ({ request }) => {
    
    const CF_UPDATE_URL = import.meta.env.CF_UPDATE_URL
    const IF_UPDATE_URL = import.meta.env.IF_UPDATE_URL

    await fetch( CF_UPDATE_URL, {
        method: 'POST',
    });  

    return new Response(
        
        JSON.stringify(
            { message: 'success' }
        ),
    )
}
