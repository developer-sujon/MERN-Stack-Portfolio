//External Lib Import
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//Internal Lib Import
import "./assets/css/bootstrap.css";
import "./assets/css/animate.min.css";
import "./assets/css/custom.css";

import App from "./App";
import { AuthContextProvider } from "./context/authContext";
const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>,
);
