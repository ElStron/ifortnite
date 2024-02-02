import type { APIRoute } from 'astro';
import type { Shop } from '../../models/shop.type.ts';
import { API_URLS } from '../../constants.ts';

export const GET: APIRoute = async ({ request }) => {
    const response = await fetch( API_URLS.CREATIVE,
        {
          method: 'GET',
          headers: { 'Authorization': import.meta.env.API_KEY, 'accept': 'application/json'},
        });
      
    const data: Shop = await response.json();
    return new Response(JSON.stringify(data)
    )
}