import { creativeList } from "./endpoints"
import { fetchData } from "./fetch"

export const getCreative = async ( { 
    lang = 'en',
}:{ 
    lang: string | undefined, 
}) => {
    const data = await fetchData(creativeList({ lang: lang }))
    return data
}