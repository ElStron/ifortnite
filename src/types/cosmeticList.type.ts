export interface Root {
    result: boolean
    pages: number
    items: Item[]
  }
  
  export interface Item {
    id: string
    type: Type
    name: string
    description: string
    rarity: Rarity
    series?: Series
    price: number
    added: Added
    builtInEmote?: BuiltInEmote
    copyrightedAudio: boolean
    upcoming: boolean
    reactive: boolean
    releaseDate?: string
    lastAppearance?: string
    interest: number
    images: Images2
    juno: Juno
    video?: string
    audio?: string
    path?: string
    gameplayTags: string[]
    apiTags: string[]
    battlepass?: Battlepass
    set?: Set
  }
  
  export interface Type {
    id: string
    name: string
  }
  
  export interface Rarity {
    id: string
    name: string
  }
  
  export interface Series {
    id: string
    name: string
  }
  
  export interface Added {
    date: string
    version: string
  }
  
  export interface BuiltInEmote {
    id: string
    type: Type2
    name: string
    description: string
    rarity: Rarity2
    series?: Series2
    images: Images
    video?: string
  }
  
  export interface Type2 {
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
    icon: string
    featured?: string
    background: string
    icon_background: string
    full_background: string
  }
  
  export interface Images2 {
    icon?: string
    featured?: string
    background?: string
    icon_background?: string
    full_background?: string
  }
  
  export interface Juno {
    icon?: string
  }
  
  export interface Battlepass {
    season: number
    tier: number
    page?: number
    type: string
    displayText: DisplayText
    battlePassName: string
  }
  
  export interface DisplayText {
    chapter: string
    season: string
    chapterSeason: string
  }
  
  export interface Set {
    id: string
    name: string
    partOf: string
  }
  