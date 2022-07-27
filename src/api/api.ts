import React from "react";
import data from "../data/product.json";
import { Products } from "./api.model";

const getProductsAPI = () => {
    return new Promise<Products>((resolve, reject) => setTimeout(() => {
        const loadData = data;
        if (loadData) return resolve({...data});
        return reject({ error: { code: 1, message: "¡Ha ocurrido un error! vuelva a intentarlo dentro de un rato" } });
    }, 1000))
}

export default getProductsAPI;