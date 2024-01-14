import shopStyles from "./shop.module.css";
import { Card, Loader } from "../../components";
import { useState } from "react";
import useProductsData from "../../hooks/useProductsData";
import { Link } from "react-router-dom";
import pathConstants from "../../routes/pathConstants";

export default function Shop() {
  const [category, setCategory] = useState("all");
  const { productsData, error, loading } = useProductsData(category);

  function categorySelector(category) {
    setCategory(category);
  }

  return (
    <div className={shopStyles.mainContainer}>
      <div className={shopStyles.categoriesContainer}>
        <div className={`${category === "all" ? shopStyles.active : ""}`} onClick={() => categorySelector("all")}>
          All Products
        </div>
        <div className={`${category === "electronics" ? shopStyles.active : ""}`} onClick={() => categorySelector("electronics")}>
          Electronics
        </div>
        <div className={`${category === "jewelery" ? shopStyles.active : ""}`} onClick={() => categorySelector("jewelery")}>
          Jewelery
        </div>
        <div className={`${category === "men's clothing" ? shopStyles.active : ""}`} onClick={() => categorySelector("men's clothing")}>
          Men&apos;s Clothing
        </div>
        <div className={`${category === "women's clothing" ? shopStyles.active : ""}`} onClick={() => categorySelector("women's clothing")}>
          Women&apos;s Clothing
        </div>
      </div>
      <div className={`${shopStyles.productCardContainer} ${error ? shopStyles.noProduct : ""}`}>
        {loading ? (
          <div className={shopStyles.loadingContainer}>
            <Loader />
          </div>
        ) : productsData && productsData.length > 0 ? (
          productsData.map((product) => (
            <Link className={shopStyles.link} key={product.id} to={`${pathConstants.SHOP}/product/${product.id}`} state={{ productsData: product }}>
              <Card title={product.title} price={product.price} imgUrl={product.image} />
            </Link>
          ))
        ) : (
          <div className={shopStyles.noProductContainer}>NO PRODUCTS AVAILABLE</div>
        )}
      </div>
    </div>
  );
}
