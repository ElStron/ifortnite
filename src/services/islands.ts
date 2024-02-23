import { islandDetails } from "./endpoints";
import { fetchData } from "./fetch";

export const getIsland = async ( { 
    lang = 'en',
    code,
}:{ 
    lang: string | undefined,
    code: string
}) => {

    const response = await fetchData( islandDetails({ code, lang }) );
    return response

}