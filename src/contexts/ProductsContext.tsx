import React, { useContext, createContext, useEffect } from "react";
import { useMemo, useState } from "react";
import getProductsAPI from "../api/api";
import {
  ProductsContextInterface,
  ProductsInterface,
} from "./productsContext.model";

export const useProducts = () => {
  return useContext(ProductsContext);
};

const useProductsProvider = (): ProductsContextInterface => {
  const [state, setState] = useState<ProductsInterface>({
    products: null,
    error: undefined,
    loading: false,
  });

  const getProducts = async () => {
    setState((data) => ({ ...data, loading: true, products: null }));

    try {
      const products = await getProductsAPI();
      setState((data) => ({ ...data, loading: false, products }));
    } catch (error) {
      setState((data) => ({ ...data, loading: false, error: true }));
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const productsData = useMemo<ProductsContextInterface>(
    () => ({
      products: state.products,
      error: state.error,
      loading: state.loading,
    }),
    [state]
  );

  return productsData;
};

const ProductsContext = createContext<ProductsContextInterface>({
  products: null,
  error: undefined,
  loading: false,
  getProducts: () => null,
});

export const ProductsContextProvider = (props: any) => {
  const products: ProductsContextInterface = useProductsProvider();
  return (
    <ProductsContext.Provider value={products}>
      {props?.children}
    </ProductsContext.Provider>
  );
};
