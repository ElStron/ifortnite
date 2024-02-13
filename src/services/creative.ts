import { creativeList } from "./endpoints"
import { fetchItems } from "./fetch"


const pagination = (data: any, page: number, itemsPerPage: number) => {
    const itemsNumber = itemsPerPage ? itemsPerPage : 10
    const items = data.slice(page * itemsNumber, (page + 1) * itemsNumber)
    return items
}

export const getCreative = async ( { 
    lang = 'en',
    page,
    itemsPerPage
}:{ 
    lang: string | undefined,
    page?: number | undefined
    itemsPerPage?: number | undefined 
}) => {
    let data = await fetchItems(creativeList({ lang: lang }))
    if (page) {
        data = pagination(data, page, itemsPerPage)
    }
    return data
}