import { islandDetails, playerCount } from "./endpoints";
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

const getPlayerCountByLink = (data: any, link: string) => {
    // Use the `find` method to find the matching island
    const matchingIsland = data.discovery.flatMap((section: any) => section.islands)
      .find((island: any) => island.link === link);
  
    // Return the player count or -1 if not found
    return matchingIsland ? matchingIsland.globalPlayerCount : 0;
  };
  

export const playerCountByCode = async ( {
    code,
}:{
    code: string,
} ) =>  {
    const response = await fetchData( playerCount() )
    const players = getPlayerCountByLink(response, code)
    return players
}
