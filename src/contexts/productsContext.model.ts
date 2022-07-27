export interface Products {
    id?:                 number;
    type?:               string;
    name?:               string;
    description?:        string;
    prices?:             Price[];
    promotions?:         Promotion[];
    phonelineMegas?:     number;
    phonelineMinutes?:   number;
    phonelineSms?:       number;
    fiberDownloadMegas?: number;
    webInfo?: WebInfo;
    error?: ApiError;
}

export interface Price {
    name:  string;
    price: number;
}

export interface Promotion {
    id:          number;
    name:        string;
    displayName: string;
    description: string;
    active:      boolean;
    type:        string;
}

export interface WebInfo {
    id:            number;
    slug:          string;
    menuTitle:     string;
    name:          string;
    description:   string;
    analyticsName: string;
    tag:           string;
    bullets:       string[];
    features:      string[];
}

export interface ApiError {
    code: number;
    message: string;
}
export interface ProductsInterface {
    products: Products | null;
    error: boolean | undefined;
    loading: boolean;
}

export interface ProductsContextInterface extends ProductsInterface  { 
    getProducts?: (item: any) => Promise<void>|null;
}