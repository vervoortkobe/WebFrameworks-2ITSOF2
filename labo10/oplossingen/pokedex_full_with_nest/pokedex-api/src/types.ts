export interface Pokemon {
    id?: string;
    species_id: string;
    height: string;
    weight: string;
    base_experience: string;
    order: string;
    is_default: string;
    name: string;
    sprites: {
        normal: string,
        animated: string
    };
    favorite: boolean
}