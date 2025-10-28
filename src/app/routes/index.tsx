import { createBrowserRouter } from "react-router-dom"
import Login from "@/modules/auth/pages/Login"
import Home from "@/modules/dashboard/pages/Home"
import Products from "@/modules/plm/products/pages/Products"

// Más adelante agregaremos layout
export const route = createBrowserRouter([
  {
      path: "/",
      element: <Home />,
  },
  {
      path: "/login",
      element: <Login />,
  },
  {
      path: "/plm/products",
      element: <Products />,
  },
])