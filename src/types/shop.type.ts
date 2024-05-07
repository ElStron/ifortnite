export interface ItemShop {
    result:            boolean;
    fullShop:          boolean;
    lastUpdate:        LastUpdate;
    currentRotation:   Record<string, Date>;
    nextRotation:      string;
    carousel:          string;
    specialOfferVideo: string;
    customBackground:  string;
    shop:              Shop[];
}

export interface LastUpdate {
    uid:  string;
    date: string;
}

export interface Shop {
    mainId:              string;
    displayName:         string;
    displayDescription:  string;
    displayType:         string;
    mainType:            string;
    offerId:             string;
    devName:             string;
    displayAssets:       DisplayAsset[];
    firstReleaseDate:    string;
    previousReleaseDate: string;
    giftAllowed:         boolean;
    buyAllowed:          boolean;
    price:               Price;
    rarity:              Rarity;
    series:              string;
    banner:              Banner;
    offerTag:            string;
    granted:             Granted[];
}

export interface Banner {
    intensity: string;
    name:      string;
    id:        string;
}

export interface DisplayAsset {
    displayAsset:       string;
    materialInstance:   string;
    url:                string;
    flipbook:           string;
    background_texture: string;
    background:         string;
    full_background:    string;
}

export interface Granted {
    id:               string;
    type:             Rarity;
    name:             string;
    description:      string;
    rarity:           Rarity;
    series:           string;
    price:            number;
    added:            Added;
    builtInEmote:     string;
    copyrightedAudio: boolean;
    upcoming:         boolean;
    reactive:         boolean;
    releaseDate:      string;
    lastAppearance:   string;
    interest:         number;
    images:           Images;
    video:            string;
    audio:            string;
    gameplayTags:     string[];
    apiTags:          string[];
    searchTags:       string[];
    battlepass:       string;
    set:              string;
    introduction:     string;
    displayAssets:    DisplayAsset[];
    shopHistory:      string[];
    styles:           Style[];
    grants:           string[];
    grantedBy:        string[];
}

export interface Added {
    version: string;
    date:    string;
}

export interface Images {
    full_background: string;
    icon_background: string;
    background:      string;
    featured:        string;
    icon:            string;
}

export interface Rarity {
    id:   string;
    name: string;
}

export interface Style {
    name:           string;
    channel:        string;
    channelName:    string;
    tag:            string;
    isDefault:      boolean;
    startUnlocked:  boolean;
    hideIfNotOwned: boolean;
    image:          string;
}

export interface Price {
    floorPrice:   number;
    finalPrice:   number;
    regularPrice: number;
}
