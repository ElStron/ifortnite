import { itemList, itemDetails } from "./endpoints"
import { fetchData } from "./fetch"

const filterItemsByType =  (type: string, items: any) => {
    const filteredItems = items.filter((item: any) => item.type.id === type || item.upcoming === type)
    return filteredItems
}


export const getCosmetics = async ( { 
    lang = 'en',
    type = undefined  
}:{ 
    lang: string | undefined, 
    type?: string | undefined 

}) => {
    const data = await fetchData(itemList({ lang: lang }))
    const items = data.items

    if (type) return filterItemsByType(type, items)

    return items
}

export const getCosmetic = async ( { 
    lang = 'en',
    id 
}:{ 
    lang: string | undefined, 
    id: string
}) => {
    const data = await fetchData(itemDetails({ lang: lang, id: id }))
    return data
}