import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import "./checkout.scss";
import Step1 from "./components/step1/Step1";
import Step2 from "./components/step2/Step2";
import Step3 from "./components/step3/Step3";
import Step4 from "./components/step4/Step4";

const Checkout: React.FC<React.PropsWithChildren> = (
  props: React.PropsWithChildren
): JSX.Element => {
  const [step, setStep] = useState<number>(0);

  const currentStepComponent = (): JSX.Element => {
    let currentComponent: JSX.Element;
    switch (step) {
      case 0:
        currentComponent = <Step1 setStep={setStep} />;
        break;
      case 1:
        currentComponent = <Step2 setStep={setStep} />;
        break;
      case 2:
        currentComponent = <Step3 setStep={setStep} />;
        break;
      case 3:
        currentComponent = <Step4 setStep={setStep} />;
        break;
      default:
        currentComponent = <div>No component</div>;
    }
    return currentComponent;
  };

  return (
    <Layout className="checkout-page">
      <h2 className="checkout-page__title">¡Comenzamos con tu pedido!</h2>
      {currentStepComponent()}
    </Layout>
  );
};

export default Checkout;
