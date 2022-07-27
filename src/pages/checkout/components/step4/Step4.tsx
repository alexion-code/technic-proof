import React, {
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { useCart } from "../../../../contexts/CartContext";
import { useProducts } from "../../../../contexts/ProductsContext";
import "./step4.scss";

const Step4 = (props: { setStep?: Dispatch<SetStateAction<number>> }) => {
  const cart = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  
  const onclick = (e: SyntheticEvent) => {
    cart.addCart({ product: null, personalData: null });
    props?.setStep?.(0);
  };

  return (
    <div className="checkout-page-step4-component">
      <div className="alert alert-success" role="alert">
        <h4 className="checkout-page-step4-component__title">
          ¡Tu pedido se ha realizado correctamente!
        </h4>
      </div>
      <button onClick={onclick} type="button" className="btn btn-primary">
        Volver al Inicio
      </button>
    </div>
  );
};

export default Step4;
