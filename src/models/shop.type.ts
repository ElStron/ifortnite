export interface Shop {
    result: boolean
    fullShop: boolean
    lastUpdate: LastUpdate
    currentRotation?: any
    nextRotation: any
    carousel: any
    specialOfferVideo: any
    customBackground: string
    shop: Item[]
  }
  
  export interface LastUpdate {
    date: string
    uid: string
  }

  
  export interface Item {
    mainId: string
    displayName: string
    displayDescription: string
    displayType: string
    mainType: string
    offerId: string
    displayAssets: DisplayAsset[]
    firstReleaseDate: string
    previousReleaseDate: string
    giftAllowed: boolean
    buyAllowed: boolean
    price: Price
    rarity: Rarity
    series?: Series
    banner?: Banner
    offerTag?: OfferTag
    granted: Granted[]
    priority: number
    section: Section
    groupIndex: number
    storeName: string
    tileSize: string
    categories: any[]
  }
  
  export interface DisplayAsset {
    displayAsset: string
    materialInstance: string
    primaryMode: string
    url: string
    flipbook: any
    background_texture?: string
    background: string
    full_background: string
  }
  
  export interface Price {
    regularPrice: number
    finalPrice: number
    floorPrice: number
  }
  
  export interface Rarity {
    id: string
    name: string
  }
  
  export interface Series {
    id: string
    name: string
  }
  
  export interface Banner {
    id: string
    name: string
    intensity: string
  }
  
  export interface OfferTag {
    id: string
    text: string
  }
  
  export interface Granted {
    id: string
    type: Type
    name: string
    description: string
    rarity: Rarity2
    series?: Series2
    images: Images
    video?: string
    audio: any
    gameplayTags: string[]
    set?: Set
  }
  
  export interface Type {
    id: string
    name: string
  }
  
  export interface Rarity2 {
    id: string
    name: string
  }
  
  export interface Series2 {
    id: string
    name: string
  }
  
  export interface Images {
    icon?: string
    featured?: string
    background?: string
    icon_background?: string
    full_background?: string
  }
  
  export interface Set {
    id: string
    name: string
    partOf: string
  }
  
  export interface Section {
    id: string
    name: string
    category?: string
    landingPriority: number
  }
  