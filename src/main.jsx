import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { RouterProvider, useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import "./App.css";
import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/tippy.css';
import router from "./routes/Route";
import { ProductProvider } from "./context/ProductContext.jsx";



const Main = () => {
  return (
    <>
      <React.StrictMode>
         <ProductProvider>
           <RouterProvider router={router} /> 
          </ProductProvider>
      </React.StrictMode>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
