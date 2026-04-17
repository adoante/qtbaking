export type Ingredient = {
    id: number;
    component_id: number;
    name: string;
    quantity: number;
    unit: string;
    metric_quantity?: number | null;
    metric_unit?: string | null;
    optional: boolean;
    notes?: string | null;
};

export type FullComponent = {
    id: number;
    recipe_id: number;
    name: string;
    ingredients: Ingredient[];
};

export type Tool = {
    id: number;
    recipe_id: number;
    name: string;
    optional: boolean;
};

export type Note = {
    id: number;
    recipe_id: number;
    note: string;
};

export type Tag = {
    id: number;
    recipe_id: number;
    tag: string;
};

export type FullRecipe = {
    id: number;
    title: string;
    thumbnail?: string | null;
    temp_fahrenheit?: number | null;
    temp_celsius?: number | null;
    components: FullComponent[];
    tools: Tool[];
    notes: Note[];
    tags: Tag[];
};

export type Bakealong = {
    id: number;
    slug: string;
    vod_title: string;
    video_url: string;
    created_at: string;
    recipes: FullRecipe[];
};
