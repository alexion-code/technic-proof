import { Price, Promotion } from "./productsContext.model";

export interface ProductInterface {
    promotion: Promotion;
    price: Price;
}

export interface PersonalData {
    nif: string;
    name: string;
    lastname: string;
    surname: string;
    dateOfBirth: string;
    phone: string;
    email: string;
}

export interface CartInterface {
    product: ProductInterface | null;
    personalData: PersonalData | null;
    error: boolean | undefined;
    loading: boolean;
    pay: boolean;
    step: number;
    finish: boolean;
}

export interface CartContextInterface extends CartInterface  { 
    addCart: (item: any) => Promise<void>|null;
    removeCart: () => Promise<void>|null;
}