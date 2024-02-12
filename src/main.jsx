import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import router from "./routes/Route.jsx";

// eslint-disable-next-line react-refresh/only-export-components
const Main = () => {
  return (
    <>
      <React.StrictMode>
           <RouterProvider router={router} /> 
      </React.StrictMode>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
