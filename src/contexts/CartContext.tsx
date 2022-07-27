import React, { useContext, createContext } from "react";
import { useMemo, useState } from "react";
import {
  CartContextInterface,
  CartInterface,
  PersonalData,
  ProductInterface,
} from "./cartContext.model";

export const useCart = () => {
  return useContext(CartContext);
};

const useCartProvider = (): CartContextInterface => {
  const [state, setState] = useState<CartInterface>({
    product: null,
    personalData: null,
    error: undefined,
    loading: false,
    pay: false,
    step: 0,
    finish: false,
  });
  const addCart = async (item: ProductInterface & PersonalData) => {
    setState((data) => ({ ...data, loading: true, ...item }));

    try {
      setState((data) => ({ ...data, loading: false }));
    } catch (error) {
      setState((data) => ({ ...data, loading: false, error: true }));
    }
  };

  const removeCart = async () => {
    setState({
      product: null,
      personalData: null,
      loading: false,
      step: 0,
      error: undefined,
      finish: false,
      pay: false,
    });
  };

  const productData = useMemo<CartContextInterface>(
    () => ({
      product: state.product,
      personalData: state.personalData,
      error: state.error,
      loading: state.loading,
      pay: state.pay,
      finish: state.finish,
      step: state.step,
      addCart,
      removeCart,
    }),
    [state, addCart, removeCart]
  );

  return productData;
};

const CartContext = createContext<CartContextInterface>({
  product: null,
  personalData: null,
  error: undefined,
  loading: false,
  pay: false,
  finish: false,
  step: 0,
  addCart: () => null,
  removeCart: () => null,
});

export const CartContextProvider = (props: any) => {
  const cart: CartContextInterface = useCartProvider();
  return (
    <CartContext.Provider value={cart}>{props?.children}</CartContext.Provider>
  );
};
