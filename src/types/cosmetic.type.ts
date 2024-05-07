export interface ItemRoot {
    result: boolean;
    item:   Item;
}

export interface Item {
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
    upcoming?:         boolean;
    reactive:         boolean;
    releaseDate:      Date;
    lastAppearance:   Date;
    interest:         number;
    images:           Images;
    juno?:             Juno;
    video?:            string;
    audio?:            string;
    path:             string;
    gameplayTags?:     string[];
    apiTags?:          string[];
    searchTags?:       string[];
    battlepass?:       string;
    set:              Set[];
    introduction?:     Introduction;
    displayAssets:    DisplayAsset[];
    shopHistory:      Date[];
    styles?:           Style[];
    previewVideos?:    PreviewVideo[];
    grants?:           Grant[];
    grantedBy:        any[];
    icon?:             string;
    background?:       string;
    full_background?:  string;
}

export interface Added {
    date:    Date;
    version: string;
}

export interface DisplayAsset {
    displayAsset?:       string;
    materialInstance?:   string;
    primaryMode?:        string;
    url:                string;
    flipbook?:           string;
    background_texture?: string;
    background?:         string;
    full_background:    string;
}

export interface Grant {
    id:          string;
    type:        Rarity;
    name:        string;
    description: string;
    rarity:      Rarity;
    series:      string;
    images:      Images;
}

export interface Images {
    icon:            string;
    featured?:        string;
    background:      string;
    icon_background: string;
    full_background: string;
}

export interface Rarity {
    id:   string;
    name: string;
}

export interface Juno {
    icon: string;
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
export interface PreviewVideo {
    url:    string;
    styles: any[];
}

export interface Set {
    id:     string;
    name:   string;
    partOf: string;
}
export interface Introduction {
    chapter: string;
    season:  string;
    text:    string;
}