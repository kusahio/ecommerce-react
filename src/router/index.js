import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import CategoryView from '../views/CategoryView';
import ItemView from "../views/ItemView";
import CartView from "../views/CartView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/category/:category",
    element: <CategoryView />,
  },
  {
    path: "/item/:id",
    element: <ItemView />,
  },
  {
    path: "/cart",
    element: <CartView />,
  },
]);