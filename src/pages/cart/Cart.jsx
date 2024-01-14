import { Link, useOutletContext } from "react-router-dom";
import cartStyles from "./cart.module.css";
import { NumberInput } from "../../components";
import pathConstants from "../../routes/pathConstants";

export default function Cart() {
  const [cartItem, setCartItem] = useOutletContext();

  function updateCartItem(id, newQuantity) {
    setCartItem((prevCartItem) => prevCartItem.map((item) => (item.id === id ? { ...item, count: newQuantity } : item)));
  }

  function removeItem(idToRemove) {
    const updatedCartItems = cartItem.filter((item) => item.id !== idToRemove);
    setCartItem(updatedCartItems);
  }

  function calculateSubtotal() {
    let subtotal = 0;
    cartItem.forEach((item) => {
      subtotal += item.price * item.count;
    });
    return Math.round((subtotal + Number.EPSILON) * 100) / 100;
  }

  function handleCheckout() {
    setCartItem([]);
    alert("Checkout Successful");
  }
  return (
    <div className={cartStyles.mainContainer}>
      {cartItem.length === 0 && (
        <div className={cartStyles.emptyCartContainer}>
          <div className={cartStyles.emptyInfo}>CART IS LOOKING EMPTY </div>
          <Link to={pathConstants.SHOP} className={cartStyles.shopNow}>
            SHOP NOW
          </Link>
        </div>
      )}
      {cartItem.length !== 0 && (
        <div className={cartStyles.tableContainer}>
          <table>
            <caption>MY CART</caption>
            <thead>
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItem.map((item) => (
                <tr itemScope="row" key={item.id} className={cartStyles.cartItemContainer}>
                  <td className={cartStyles.firstCol}>
                    <div className={cartStyles.itemContainer}>
                      <Link className={cartStyles.imgContainer} to={`${pathConstants.CART}`}>
                        <img src={item.image} className={cartStyles.img}></img>
                      </Link>
                      <div className={cartStyles.itemTitle}>{item.title}</div>
                    </div>
                  </td>
                  <td className={cartStyles.price}>{`$${item.price}`}</td>
                  <td className={cartStyles.quantity}>
                    <NumberInput quantity={item.count} setCartItem={setCartItem} id={item.id} updateCartItem={updateCartItem}></NumberInput>
                  </td>
                  <td className={cartStyles.total}>{`$${Math.round((item.price * item.count + Number.EPSILON) * 100) / 100}`}</td>
                  <td className={cartStyles.lastCol}>
                    <button className={cartStyles.remove} onClick={() => removeItem(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={cartStyles.checkoutContainer}>
            <div className={cartStyles.subtotalContainer}>
              <div className={cartStyles.subtotalMain}>
                <div className={cartStyles.subtotal}>SUBTOTAL</div>
                <div className={cartStyles.subtotalAmount}>{`$${calculateSubtotal()}`}</div>
              </div>
              <div className={cartStyles.subtotalInfo}>
                <em>Shipping and taxes computed at checkout</em>
              </div>
            </div>
            <div className={cartStyles.checkoutSection}>
              <button className={cartStyles.checkoutBtn} onClick={handleCheckout}>
                CHECKOUT
              </button>
              <Link to={pathConstants.SHOP} className={cartStyles.keepShopping}>
                Keep Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
