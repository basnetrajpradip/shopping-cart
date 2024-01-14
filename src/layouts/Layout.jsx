import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Loader } from "../components";
import { useState } from "react";
export default function Layout() {
  const [cartItem, setCartItem] = useState([]);
  return (
    <>
      <Header cartItem={cartItem} />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet context={[cartItem, setCartItem]} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
