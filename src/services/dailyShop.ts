import { dailyShop } from "./endpoints"
import { fetchData } from "./fetch"

export function filterItemsBySection(items: any) {
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


export const getDailyShop = async ( { 
    lang = 'en',
    type = undefined,
    filter  
}:{ 
    lang: string | undefined, 
    type?: string | undefined
    filter?: string 

}) => {
    let data = await fetchData(dailyShop({ lang: lang }))
    
    if (filter === 'section') {
        return data.shop = filterItemsBySection(data.shop)
    }
    
    return data
}