import type { APIRoute } from 'astro';
import { playerCountByCode }  from "@/services/islands";

export const GET: APIRoute =  async ({ props, request, url }) => {
    const code = url.searchParams.get("code") as string;
    const players = await playerCountByCode({
        code: code
    })
    
    return new Response(
      JSON.stringify({
        players: players
      }),
    )
  }