import { Link, useLocation } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import productStyles from "./product-info.module.css";
import { NumberInput } from "../../components";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import pathConstants from "../../routes/pathConstants";

export default function ProductInfo() {
  const location = useLocation();
  const { productsData } = location.state;
  const [quantity, setQuantity] = useState(1);
  const [cartItem, setCartItem] = useOutletContext();

  function handleItemExistence() {
    // returns item index if found or -1 if not found
    return cartItem.findIndex((item) => item.id === productsData.id);
  }

  function handleCart() {
    const addQuantity = quantity;
    setQuantity(1);
    setCartItem((prevCartItem) => {
      const itemExistenceIndex = handleItemExistence();
      if (itemExistenceIndex !== -1) {
        return prevCartItem.map((item, index) => (index === itemExistenceIndex ? { ...item, count: item.count + addQuantity } : item));
      } else {
        return [...prevCartItem, { ...productsData, count: quantity }];
      }
    });
  }

  return (
    <div className={productStyles.mainContainer}>
      <div className={productStyles.imgContainer}>
        <img src={productsData.image} className={productStyles.img} alt="Product Image" />
      </div>
      <div className={productStyles.productInfo}>
        <div className={productStyles.infoTop}>
          <div>
            <div className={productStyles.productTitle}>{productsData.title}</div>
            <div className={productStyles.productPrice}>{`Price : $${productsData.price}`}</div>
          </div>
          <div className={productStyles.description}>{productsData.description}</div>
        </div>
        <div className={productStyles.purchaseInfo}>
          <div className={productStyles.category}>
            <div> Category :</div> <div>{productsData.category}</div>
          </div>
          <div className={productStyles.quantity}>
            <div>Quantity :</div>
            <NumberInput quantity={quantity} setQuantity={setQuantity}></NumberInput>
          </div>
        </div>
        <div className={productStyles.purchaseContainer}>
          <button className={productStyles.cart} onClick={handleCart}>
            <GiShoppingCart size={"1.5rem"} />
            <div>ADD TO CART</div>
          </button>
          <Link to={pathConstants.CART} className={productStyles.link}>
            {handleItemExistence() !== -1 && <button className={productStyles.buyNow}>BUY NOW</button>}
          </Link>
        </div>
      </div>
    </div>
  );
}
