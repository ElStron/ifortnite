import { dailyShop } from "./endpoints"
import { fetchData } from "./fetch"

export const getDailyShop = async ( { 
    lang = 'en',
    type = undefined  
}:{ 
    lang: string | undefined, 
    type?: string | undefined 

}) => {
    const data = await fetchData(dailyShop({ lang: lang }))
    return data
}