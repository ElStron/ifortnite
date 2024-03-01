import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
    const response = await fetch( '...' );  
    const data = await response.json();
    return new Response(JSON.stringify(data)
    )
}
