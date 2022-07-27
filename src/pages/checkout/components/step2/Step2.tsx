import React, {
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useCart } from "../../../../contexts/CartContext";
import { PersonalData } from "../../../../contexts/cartContext.model";
import { ValidateSpanishID } from "../../../../utils/functions";
import "./step2.scss";

const Step2 = (props: { setStep?: Dispatch<SetStateAction<number>> }) => {
  const cart = useCart();
  const form = useRef<HTMLFormElement & { elements: HTMLInputElement }>(null);

  const [errors, setErrors] = useState<{
    nif: boolean;
    name: boolean;
    lastname: boolean;
    surname: boolean;
    dateOfBirth: boolean;
    phone: boolean;
    email: boolean;
  }>({
    nif: false,
    name: false,
    lastname: false,
    surname: false,
    dateOfBirth: false,
    phone: false,
    email: false,
  });
  const [personalData, setPersonalData] = useState<PersonalData>({
    nif: "",
    name: "",
    lastname: "",
    surname: "",
    dateOfBirth: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
      window.scrollTo(0, 0);
  },[]);
  
  const errorsForm = () => {
    let error: boolean = false;
    Object.values(errors).forEach((val) => {
      if (val) {
        error = true;
      }
    });
    Object.values(personalData).forEach((val) => {
      if (val === "") {
        error = true;
      }
    });
    return error;
  };

  const onChange = (e: SyntheticEvent) => {
    const { name, value } = e.currentTarget as HTMLInputElement;
    let pData: PersonalData = { ...personalData };
    let err: {
      nif: boolean;
      name: boolean;
      lastname: boolean;
      surname: boolean;
      dateOfBirth: boolean;
      phone: boolean;
      email: boolean;
    } = { ...errors };
    switch (name) {
      case "nif":
        if (value !== "" && !ValidateSpanishID(value).valid) err.nif = true;
        else err.nif = false;
        pData.nif =
          value
            ?.match(/[a-zA-Z0-9]+/gi)
            ?.join()
            ?.toUpperCase() || "";
        break;
      case "name":
        err.name = false;
        pData.name =
          value
            ?.match(/[a-zA-ZñÑáéíóúÁÉÍÓÚäëïöüÄËÏÖÜ ]+/gi)
            ?.join()
            ?.toUpperCase() || "";
        break;
      case "lastname":
        err.lastname = false;
        pData.lastname =
          value
            ?.match(/[a-zA-ZñÑáéíóúÁÉÍÓÚäëïöüÄËÏÖÜ ]+/gi)
            ?.join()
            ?.toUpperCase() || "";
        break;
      case "surname":
        err.surname = false;
        pData.surname =
          value
            ?.match(/[a-zA-ZñÑáéíóúÁÉÍÓÚäëïöüÄËÏÖÜ ]+/gi)
            ?.join()
            ?.toUpperCase() || "";
        break;
      case "dateOfBirth":
        if (value !== "") {
          if (value.split("-").length < 3) {
            err.dateOfBirth = true;
          } else if (value.split("-").length === 3) {
            const [day, month, year] = value.split("-");
            if (
              year.length !== 4 ||
              parseInt(year) < 1900 ||
              parseInt(year) > 2004 ||
              month.length !== 2 ||
              parseInt(month) > 12 ||
              parseInt(month) < 1 ||
              day.length !== 2 ||
              parseInt(day) > 31 ||
              parseInt(day) < 1
            )
              err.dateOfBirth = true;
            else err.dateOfBirth = false;
          } else {
            err.dateOfBirth = false;
          }
        } else err.dateOfBirth = false;
        pData.dateOfBirth =
          value
            ?.match(/[0-9-]+/gi)
            ?.join()
            ?.toUpperCase() || "";
        break;
      case "phone":
        err.phone =
          value === "" || value?.match(/^\+(?:[0-9] ?){6,14}[0-9]$/)
            ? false
            : true;
        pData.phone =
          value
            ?.match(/[0-9+]+/gi)
            ?.join()
            ?.toUpperCase() || "";
        break;
      case "email":
        if (
          value !== "" &&
          value?.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) !== null
        )
          err.email = false;
        else err.email = true;
        pData.email = value.toLowerCase();
        break;
      default:
    }
    setErrors(err);
    setPersonalData(pData);
  };

  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
    cart.addCart({ personalData });
    props?.setStep?.(2);
  };

  return (
    <div className="checkout-page-step2-component">
      <form onSubmit={submit} ref={form}>
        <h4 className="checkout-page-step2-component__title">
          02.Titular del contrato
        </h4>
        <div className="checkout-page-step2-component__inputs">
          <div className="checkout-page-step2-component__inputs-group">
            <label
              htmlFor="nif"
              className={`form-label ${errors.nif ? "error" : ""}`}
            >
              Documento de identidad
            </label>
            <div className="input-group">
              <input
                type="text"
                id="nif"
                name="nif"
                className={`form-control ${errors.nif ? "error" : ""}`}
                placeholder="Ej. 01234567X"
                aria-label="nif"
                aria-describedby="nif"
                onChange={onChange}
                value={personalData.nif}
                maxLength={11}
                required
              />
            </div>
            <p className="form-info">Sin guiones</p>
          </div>
          <div className="checkout-page-step2-component__inputs-group">
            <label
              htmlFor="name"
              className={`form-label ${errors.name ? "error" : ""}`}
            >
              Nombre
            </label>
            <div className="input-group">
              <input
                type="text"
                id="name"
                name="name"
                className={`form-control ${errors.name ? "error" : ""}`}
                placeholder="Ej. Daniel"
                aria-label="name"
                aria-describedby="name"
                onChange={onChange}
                value={personalData.name}
                maxLength={30}
                required
              />
            </div>
          </div>
          <div className="checkout-page-step2-component__inputs-group">
            <label
              htmlFor="lastname"
              className={`form-label ${errors.lastname ? "error" : ""}`}
            >
              Primer apellido
            </label>
            <div className="input-group">
              <input
                type="text"
                id="lastname"
                name="lastname"
                className={`form-control ${errors.lastname ? "error" : ""}`}
                placeholder="Ej. Fernández"
                aria-label="lastname"
                aria-describedby="lastname"
                onChange={onChange}
                value={personalData.lastname}
                maxLength={30}
                required
              />
            </div>
          </div>
          <div className="checkout-page-step2-component__inputs-group">
            <label
              htmlFor="surname"
              className={`form-label ${errors.surname ? "error" : ""}`}
            >
              Segundo apellido
            </label>
            <div className="input-group">
              <input
                type="text"
                id="surname"
                name="surname"
                className={`form-control ${errors.surname ? "error" : ""}`}
                placeholder="Ej. García"
                aria-label="surname"
                aria-describedby="surname"
                onChange={onChange}
                value={personalData.surname}
                maxLength={30}
                required
              />
            </div>
          </div>
          <div className="checkout-page-step2-component__inputs-group">
            <label
              htmlFor="dateOfBirth"
              className={`form-label ${errors.dateOfBirth ? "error" : ""}`}
            >
              Fecha de nacimiento
            </label>
            <div className="input-group">
              <input
                type="text"
                id="dateOfBirth"
                name="dateOfBirth"
                className={`form-control ${errors.dateOfBirth ? "error" : ""}`}
                placeholder="Ej. 01-02-1990"
                aria-label="dateOfBirth"
                aria-describedby="dateOfBirth"
                onChange={onChange}
                value={personalData.dateOfBirth}
                maxLength={10}
                required
              />
            </div>
            <p className="form-info">DD-MM-YYYY</p>
          </div>
          <div className="checkout-page-step2-component__inputs-group">
            <label
              htmlFor="phone"
              className={`form-label ${errors.phone ? "error" : ""}`}
            >
              Teléfono de contacto
            </label>
            <div className="input-group">
              <input
                type="text"
                id="phone"
                name="phone"
                className={`form-control ${errors.phone ? "error" : ""}`}
                placeholder="Ej. 612345678"
                aria-label="phone"
                aria-describedby="phone"
                onChange={onChange}
                value={personalData.phone}
                maxLength={15}
                required
              />
            </div>
            <p className="form-info">
              Nos pondremos en contacto contigo en este teléfono
            </p>
          </div>
        </div>
        <div className="checkout-page-step2-component__inputs2">
          <div className="checkout-page-step2-component__inputs-email">
            <label
              htmlFor="email"
              className={`form-label ${errors.email ? "error" : ""}`}
            >
              Correo electrónico
            </label>
            <div className="input-group">
              <input
                type="email"
                id="email"
                name="email"
                className={`form-control ${errors.email ? "error" : ""}`}
                placeholder="Ej. carmenfernandez@gmail.com"
                aria-label="email"
                aria-describedby="email"
                onChange={onChange}
                value={personalData.email}
                maxLength={80}
                required
              />
            </div>
            <p className="form-info">Sin tildes</p>
          </div>
        </div>
        <span className="checkout-page-step2-component__terms">
          <span className="checkout-page-step2-component__terms-text">
            Al continuar estas aceptando los&nbsp;
          </span>
          <a href="#" className="checkout-page-step2-component__terms-link">
            Términos y condiciones en Protección de datos
          </a>
        </span>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={errorsForm()}
        >
          Continuar
        </button>
      </form>
    </div>
  );
};

export default Step2;
