import { dailyShop } from "./endpoints"
import { fetchData } from "./fetch"

export function filterItemsBySection(items: any) {
    if (!items) return
    
    const sections: { id: string; name: string; price: number; items?: any[] }[] = [];

    for (const item of items) {
        const exists = sections.find((section) => section.id === item.section.id);
        if (!exists) {
            const price = item.price.regularPrice - item.price.finalPrice;
            sections.push({ id: item.section.id, name: item.section.name, price: price });
        }
    }

    sections.sort((a: any, b: any) => {
        const numA = a.price;
        const numB = b.price;

        return numB - numA;
    });

    sections.forEach((section) => {
        section.items = items.filter((item: any) => item.section.id === section.id);
    });

    return sections;
}

export function filterByNewest(items: any) {
    items.map((item: any) => {
        if(item.banner && item.banner.name === 'new') {
            return item
        }
    })
    return []
}

export const getDailyShop = async ( { 
    lang = 'en',
    date,
    type = undefined,
}:{ 
    lang: string | undefined,
    date?: string | undefined, 
    type?: string | undefined
}) => {

    const url = date ? dailyShop({ lang: lang}) + `&date=${date}` : dailyShop({ lang: lang })
    let data = await fetchData( url )
    return data
}