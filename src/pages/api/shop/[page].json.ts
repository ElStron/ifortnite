import type { APIRoute } from 'astro';
import { getDailyShop } from '@/services/dailyShop';
export const prerender = true;

export async function ShopItems() {

  const data = await getDailyShop({ lang: 'en' });
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
