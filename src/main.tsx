import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "antd/dist/reset.css";
import { rutas } from "./router/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={rutas} />
  </StrictMode>
);
