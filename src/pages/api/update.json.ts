import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
    const response = await fetch( 'https://api.vercel.com/v1/integrations/deploy/prj_xGNgyuZ9nCEW9YzRZTH7f5aepPjz/NihVGOB8wY' );  
    const data = await response.json();
    return new Response(JSON.stringify(data)
    )
}