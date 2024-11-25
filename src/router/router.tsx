import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Persona from "../components/Persona";
import Error404 from "../components/Error404";

export const rutas = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
  },
  {
    path: "/persona",
    element: <Persona />,
  },
]);
