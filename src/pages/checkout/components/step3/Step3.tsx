import React, {
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { useCart } from "../../../../contexts/CartContext";
import { useProducts } from "../../../../contexts/ProductsContext";
import "./step3.scss";

const Step3 = (props: { setStep?: Dispatch<SetStateAction<number>> }) => {
  const { products } = useProducts();
  const cart = useCart();

  const [checkValue, setCheckValue] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onChange = (e: SyntheticEvent) => {
    const { checked } = e.currentTarget as HTMLInputElement;
    setCheckValue(checked);
  };

  const nextStep = (e: SyntheticEvent) => {
    e.preventDefault();
    props?.setStep?.(3);
  };

  return (
    <div className="checkout-page-step3-component">
      <h4 className="checkout-page-step3-component__title">
        03.Resumen de tu pedido
      </h4>
      <h4 className="checkout-page-step3-component__subtitle">Tu Tarifa</h4>
      <div className="checkout-page-step3-component__titles">
        <div className="checkout-page-step3-component__titles-column">
          <div className="checkout-page-step3-component__titles-column-row mb-40">
            <h5 className="checkout-page-step3-component__titles-column-name bold">
              {products?.webInfo?.analyticsName?.split("Y")[0]}
            </h5>
            {cart?.product?.price && (
              <div className="checkout-page-step3-component__price-column">
                <h3 className="checkout-page-step3-component__price">
                  {`${cart?.product?.price?.price?.toFixed(2)}€`}
                </h3>
              </div>
            )}
          </div>
          <div className="checkout-page-step3-component__titles-column-row mb-40">
            <h5 className="checkout-page-step3-component__titles-column-name bold">
              {products?.webInfo?.analyticsName?.split("Y")[1]}
            </h5>
          </div>
          <div className="checkout-page-step3-component__titles-column-row mb-30">
            <h5 className="checkout-page-step3-component__titles-column-text">
              Permanencia
            </h5>
            <h5 className="checkout-page-step3-component__titles-column-text text-green">
              3 Meses
            </h5>
          </div>
        </div>
      </div>
      <span className="checkout-page-step3-component__separation"></span>
      <h4 className="checkout-page-step3-component__subtitle mt-36">
        El primer mes pagarás
      </h4>
      <div className="checkout-page-step3-component__titles">
        <div className="checkout-page-step3-component__titles-column">
          <div className="checkout-page-step3-component__titles-column-row mb-40">
            <h5 className="checkout-page-step3-component__titles-column-name">
              Envío y Activación de SIM
            </h5>
            {cart?.product?.price && (
              <div className="checkout-page-step3-component__price-column">
                <h4 className="checkout-page-step3-component__price text-green">
                  {`0.00€`}
                </h4>
              </div>
            )}
          </div>
          <div className="checkout-page-step3-component__titles-column-row mb-16">
            <h5 className="checkout-page-step3-component__titles-column-name">
              Instalación
            </h5>
            {cart?.product?.price && (
              <div className="checkout-page-step3-component__price-column">
                <h4 className="checkout-page-step3-component__price">
                  {`96.80€`}
                </h4>
              </div>
            )}
          </div>
          <div className="checkout-page-step3-component__titles-column-row mb-30">
            <h5 className="checkout-page-step3-component__titles-column-name">
              Descuento por Instalación
            </h5>
            {cart?.product?.price && (
              <div className="checkout-page-step3-component__price-column">
                <h4 className="checkout-page-step3-component__price text-green">
                  {`-96.80€`}
                </h4>
              </div>
            )}
          </div>
          <div className="checkout-page-step3-component__titles-column-row mb-30">
            <h5 className="checkout-page-step3-component__titles-column-name">
              &nbsp;
            </h5>
            {cart?.product?.price && (
              <div className="checkout-page-step3-component__price-column">
                <h1 className="checkout-page-step3-component__price lh-60">
                  {`${cart?.product?.price?.price?.toFixed(2)}€`}
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
      <span className="checkout-page-step3-component__separation"></span>
      <div className="checkout-page-step3-component__titles mt-20">
        <div className="checkout-page-step3-component__titles-column">
          <div className="checkout-page-step3-component__titles-column-row2 align-start mb-30">
            <h4 className="checkout-page-step3-component__titles-column-subtitle">
              Todos los meses pagarás
            </h4>
            {cart?.product?.price && (
              <div className="checkout-page-step3-component__price-column align-end">
                <div className="checkout-page-step3-component__price-info">
                  <p className="checkout-page-step3-component__price-info-month">
                    TOTAL
                  </p>
                  <p className="checkout-page-step3-component__price-info-iva">
                    IVA incluido
                  </p>
                </div>
                <h1 className="checkout-page-step3-component__price lh-80">
                  {`${cart?.product?.price?.price?.toFixed(2)}€`}
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
      <span className="checkout-page-step3-component__separation"></span>
      <div className="checkout-page-step3-component__footer">
        <div className="checkout-page-step3-component__footer-left">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="check"
              id="check"
              onChange={onChange}
            />
          </div>
          <span className="checkout-page-step3-component__terms">
            <span className="checkout-page-step3-component__terms-text">
              He leído y acepto los costes y las nuevas condiciones asociadas al
              cambio de tarifa, módulo de ahorro y/o promoción, así como
              la&nbsp;
            </span>
            <a href="#" className="checkout-page-step3-component__terms-link">
              política de desestimiento
            </a>
            <span className="checkout-page-step3-component__terms-text">
              ,y solicito que los servicios comiencen a prestarse en el
              siguiente ciclo de facturación.
            </span>
          </span>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={nextStep}
          disabled={!checkValue}
        >
          Aceptar y confirmar tarifa
        </button>
      </div>
    </div>
  );
};

export default Step3;
