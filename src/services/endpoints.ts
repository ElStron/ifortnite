export const ENDPOINTS = {
    'v1': 'https://fortniteapi.io/v1',
    'v2': 'https://fortniteapi.io/v2',
    'v3': 'https://fortniteapi.io/v3',
    'v4': 'https://race.f1calendar.live/',
}


export const dailyShop =  ( { lang }:{ lang: string }) => `${ENDPOINTS.v2}/shop?lang=${lang}`

export const itemList =  ( { lang }:{ lang: string }) => `${ENDPOINTS.v2}/items/list?lang=${lang}`

export const bundlesList = ( { lang }:{ lang: string }) => `${ENDPOINTS.v2}/bundles/list?lang=${lang}`

export const itemDetails = ( { id, lang }:{ id: string, lang: string }) => `${ENDPOINTS.v2}/items/get?id=${id}&lang=${lang}`

export const creativeList = ( { lang }:{ lang: string }) => `${ENDPOINTS.v4}/creative/?lang=${lang}`

export const islandDetails = ( { code, lang }:{ code: string, lang: string }) => `${ENDPOINTS.v1}/creative/island?code=${code}&lang=${lang}`