import React, {
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { useCart } from "../../../../contexts/CartContext";
import { useProducts } from "../../../../contexts/ProductsContext";
import { ReactComponent as Check } from "../../../../assets/icons/check.svg";
import { ReactComponent as Ok } from "../../../../assets/icons/ok.svg";
import "./step1.scss";
import { Promotion } from "../../../../contexts/productsContext.model";
import Spinner from "../../../../components/spinner/Spinner";

const Step1 = (props: { setStep?: Dispatch<SetStateAction<number>> }) => {
  const cart = useCart();

  const { products, loading } = useProducts();
  const [selected, setSelected] = useState<number | undefined>(undefined);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onclick = (e: SyntheticEvent) => {
    const index: number = parseInt(
      e?.currentTarget?.id?.split("card_offer_")[1]
    );
    cart.addCart({
      product: {
        promotion: products?.promotions ? products?.promotions[index] : null,
        price: products?.prices ? products?.prices[index] : null,
      },
    });
    setSelected(index);
  };

  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (selected !== undefined) {
      props?.setStep?.(1);
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className="checkout-page-step1-component">
      <form onSubmit={submit}>
        <h4 className="checkout-page-step1-component__title">
          01.Configura tu tarifa
        </h4>
        {products !== null && (
          <>
            <div className="checkout-page-step1-component__titles">
              <div className="checkout-page-step1-component__titles-column">
                <h1 className="checkout-page-step1-component__name">
                  {products?.webInfo?.name}
                </h1>
                <span className="checkout-page-step1-component__separation"></span>
              </div>
              {cart?.product?.price && (
                <div className="checkout-page-step1-component__price-column">
                  <h1 className="checkout-page-step1-component__price">
                    {`${cart?.product?.price?.price?.toFixed(2)}€`}
                  </h1>
                  <div className="checkout-page-step1-component__price-info">
                    <p className="checkout-page-step1-component__price-info-month">
                      / mes
                    </p>
                    <p className="checkout-page-step1-component__price-info-iva">
                      IVA incluido
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="checkout-page-step1-component__description">
              {products?.description}
            </div>
            <div className="checkout-page-step1-component__features">
              {products?.webInfo?.features?.map(
                (feature: string, index: number) => (
                  <span
                    className="checkout-page-step1-component__features-group"
                    key={index}
                  >
                    <Check
                      stroke="#582cc1"
                      className="checkout-page-step1-component__features-check"
                    />
                    <p className="checkout-page-step1-component__features-p">
                      {feature}
                    </p>
                  </span>
                )
              )}
            </div>
            <p className="checkout-page-step1-component__choice-text">
              Elige la promoción que quieres aplicarle a tu tarifa
            </p>
            <div className="checkout-page-step1-component__cards">
              {(products?.promotions || []).map(
                (promotion: Promotion, index: number) => (
                  <div
                    id={`card_offer_${index}`}
                    key={index}
                    className={`card ${index === selected ? "selected" : ""}`}
                    onClick={onclick}
                  >
                    <span className="card-header-title">
                      {index === selected && index === 1
                        ? [
                            <h5 key={`h5__${index}`} className="card-info">
                              LA MÁS VENDIDA
                            </h5>,
                            <Ok
                              key={`svg__${index}`}
                              stroke="#c3a5ff"
                              className="card-icon-ok"
                            />,
                          ]
                        : index === selected &&
                          index === 0 && [
                            <h5
                              key={`h5__${index}`}
                              className="card-info no-info"
                            ></h5>,
                            <Ok
                              key={`svg__${index}`}
                              stroke="#c3a5ff"
                              className="card-icon-ok right"
                            />,
                          ]}
                    </span>
                    <div className="card-body">
                      <h5 className="card-title">{promotion?.name}</h5>
                      <p className="card-text">{promotion?.description}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </>
        )}

        <button
          type="submit"
          className="btn btn-primary"
          disabled={selected === undefined}
        >
          Continuar
        </button>
      </form>
    </div>
  );
};

export default Step1;
