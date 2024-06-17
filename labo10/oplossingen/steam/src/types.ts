export interface SteamLibrary {
    genres: GenreElement[];
    games:  Game[];
}

export interface Game {
    type:                     string;
    name:                     string;
    id:                       number;
    required_age:             number | string;
    is_free:                  boolean;
    dlc?:                     number[];
    detailed_description:     string;
    about_the_game:           string;
    short_description:        string;
    supported_languages:      string;
    header_image:             string;
    website:                  null | string;
    pc_requirements:          PCRequirementsClass;
    mac_requirements:         any[] | PCRequirementsClass;
    linux_requirements:       any[] | PCRequirementsClass;
    developers?:              string[];
    publishers:               string[];
    price_overview?:          PriceOverview;
    packages?:                number[];
    package_groups:           PackageGroup[];
    platforms:                Platforms;
    metacritic?:              Metacritic;
    categories:               Category[];
    screenshots:              Screenshot[];
    movies?:                  Movie[];
    recommendations?:         Recommendations;
    achievements?:            Achievements;
    release_date:             ReleaseDate;
    support_info:             SupportInfo;
    background:               string;
    background_raw:           string;
    content_descriptors:      ContentDescriptors;
    genre:                    GameGenre;
    reviews?:                 string;
    legal_notice?:            string;
    demos?:                   Demo[];
    controller_support?:      string;
    ext_user_account_notice?: string;
    drm_notice?:              string;
}

export interface Achievements {
    total:       number;
    highlighted: Highlighted[];
}

export interface Highlighted {
    name: string;
    path: string;
}

export interface Category {
    id:          number;
    description: string;
}

export interface ContentDescriptors {
    ids:   number[];
    notes: null | string;
}

export interface Demo {
    appid:       number;
    description: string;
}

export interface GameGenre {
    id:          number;
    description: string;
}

export interface PCRequirementsClass {
    minimum:      string;
    recommended?: string;
}

export interface Metacritic {
    score: number;
    url:   string;
}

export interface Movie {
    id:        number;
    name:      string;
    thumbnail: string;
    webm:      Webm;
    mp4:       Mp4;
    highlight: boolean;
}

export interface Mp4 {
    "480": string;
    max:   string;
}

export interface Webm {
    "480": string;
    max:   string;
}

export interface PackageGroup {
    name:                      string;
    title:                     string;
    description:               string;
    selection_text:            string;
    save_text:                 string;
    display_type:              number | string;
    is_recurring_subscription: string;
    subs:                      Sub[];
}

export interface Sub {
    packageid:                    number;
    percent_savings_text:         string;
    percent_savings:              number;
    option_text:                  string;
    option_description:           string;
    can_get_free_license:         string;
    is_free_license:              boolean;
    price_in_cents_with_discount: number;
}

export interface Platforms {
    windows: boolean;
    mac:     boolean;
    linux:   boolean;
}

export interface PriceOverview {
    currency:          string;
    initial:           number;
    final:             number;
    discount_percent:  number;
    initial_formatted: string;
    final_formatted:   string;
}

export interface Recommendations {
    total: number;
}

export interface ReleaseDate {
    coming_soon: boolean;
    date:        string;
}

export interface Screenshot {
    id:             number;
    path_thumbnail: string;
    path_full:      string;
}

export interface SupportInfo {
    url:   string;
    email: string;
}

export interface GenreElement {
    id:          number;
    description: string;
    count:       number;
}
