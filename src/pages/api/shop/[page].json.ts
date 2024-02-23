import type { APIRoute } from 'astro';

import { API_URLS } from '@/constants.ts';

export async function ShopItems() {
  const response = await fetch(API_URLS.SHOP, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': import.meta.env.API_KEY
    }
  }); 

  const data = await response.json();
  const shop = data.shop;
  return shop
}

export async function getStaticPaths() {
  const pages = await ShopItems();
  const itemsForEachPage = 20;

  const params = Math.ceil(pages.length / itemsForEachPage);
  const pagesNumbers = Array.from({ length: params }, (_, i) => i + 1);

  return pagesNumbers.map((page, i) => {
    return {
      params: { page: String(page) },
      props: { page: pages.slice(i * itemsForEachPage, (i + 1) * itemsForEachPage) },
    };
  })

}


export const GET: APIRoute = ({ props, request }) => {
  const items = props.page;
  return new Response(
    JSON.stringify(items),
  )
}
