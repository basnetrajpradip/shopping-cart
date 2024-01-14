import React from "react";
import pathConstants from "./pathConstants";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import Page404 from "../pages/error/ErrorPage";

const Home = React.lazy(() => import("../pages/home/Home"));
const Shop = React.lazy(() => import("../pages/shop/Shop"));
const Cart = React.lazy(() => import("../pages/cart/Cart"));
const About = React.lazy(() => import("../pages/about/About"));
const ProductInfo = React.lazy(() => import("../pages/product-info/ProductInfo"));

const routes = [
  { path: pathConstants.HOME, element: <Home /> },
  { path: pathConstants.SHOP, element: <Shop /> },
  { path: `${pathConstants.SHOP}/product/:id`, element: <ProductInfo /> },
  { path: pathConstants.CART, element: <Cart /> },
  { path: pathConstants.ABOUT, element: <About /> },
];

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Page404 />,
    children: routes,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
