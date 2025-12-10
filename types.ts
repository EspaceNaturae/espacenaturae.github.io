export interface ProductItem {
    id: string;
    name: string;
    description: string;
    details?: string[];
    ingredients?: string;
    image: string;
    tag?: string;
}

export interface TeaItem extends ProductItem {
    notes: string;
    ritual: string;
}
