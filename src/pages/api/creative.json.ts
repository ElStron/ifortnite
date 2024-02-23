import type { APIRoute } from 'astro';
import { getCreative }  from "@/services/creative";

export const GET: APIRoute =  async ({ props, request, url }) => {
    const page = url.searchParams.get("page") || undefined;
    const itemsPerPage = url.searchParams.get("i") || undefined;
    const lang = url.searchParams.get("lang") || 'en';

    const items = await getCreative({ 
        lang: lang, 
        page: Number(page), 
        itemsPerPage: Number(itemsPerPage) 
    });
    
    return new Response(
      JSON.stringify(items),
    )
  }