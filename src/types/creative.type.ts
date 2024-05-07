export interface Creative {
    result: boolean;
    island: Island;
}

export interface Island {
    type:               string;
    code:               string;
    latestVersion:      number;
    islandType:         string;
    islandPlotTemplate: null;
    publishedDate:      Date;
    createdDate:        Date;
    introduction:       string;
    title:              string;
    description:        string;
    creator:            string;
    creatorId:          string;
    creatorCode:        string;
    image:              string;
    promotion_image:    string;
    youtube:            null;
    tags:               string[];
    status:             string;
    videoID:            null;
    video:              null;
    ratings:            Ratings;
}

export interface Ratings {
    rating_received_time: Date;
    boards:               Boards;
}

export interface Boards {
    ACB:      Acb;
    PEGI:     Acb;
    Generic:  Acb;
    ClassInd: Acb;
    GRAC:     Acb;
    USK:      Acb;
    ESRB:     Acb;
    Russia:   Acb;
}

export interface Acb {
    descriptors:          string[];
    rating_overridden:    boolean;
    rating:               string;
    initial_rating:       string;
    interactive_elements: string[];
}
export interface Creative {
    result: boolean;
    island: Island;
}

export interface Island {
    type:               string;
    code:               string;
    latestVersion:      number;
    islandType:         string;
    islandPlotTemplate: null;
    publishedDate:      Date;
    createdDate:        Date;
    introduction:       string;
    title:              string;
    description:        string;
    creator:            string;
    creatorId:          string;
    creatorCode:        string;
    image:              string;
    promotion_image:    string;
    youtube:            null;
    tags:               string[];
    status:             string;
    videoID:            null;
    video:              null;
    ratings:            Ratings;
}

export interface Ratings {
    rating_received_time: Date;
    boards:               Boards;
}

export interface Boards {
    ACB:      Acb;
    PEGI:     Acb;
    Generic:  Acb;
    ClassInd: Acb;
    GRAC:     Acb;
    USK:      Acb;
    ESRB:     Acb;
    Russia:   Acb;
}

export interface Acb {
    descriptors:          string[];
    rating_overridden:    boolean;
    rating:               string;
    initial_rating:       string;
    interactive_elements: string[];
}
