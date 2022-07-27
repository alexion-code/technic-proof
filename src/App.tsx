import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./contexts/CartContext";
import {
  ProductsContextProvider,
  useProducts,
} from "./contexts/ProductsContext";
import Checkout from "./pages/checkout/Checkout";

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Checkout />} />
          </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
