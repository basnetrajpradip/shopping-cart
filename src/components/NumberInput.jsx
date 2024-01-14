import numberInputStyles from "./number-input.module.css";
import PropTypes from "prop-types";

export default function NumberInput({ quantity, setQuantity, updateCartItem, id }) {
  const handleIncrementCounter = () => {
    if (setQuantity) setQuantity((prevState) => prevState + 1);
    if (id) updateCartItem(id, quantity + 1);
  };

  const handleDecrementCounter = () => {
    if (quantity > 1) {
      if (setQuantity) setQuantity((prevState) => prevState - 1);
      if (id) updateCartItem(id, quantity - 1);
    }
  };

  return (
    <div className={numberInputStyles.btnGroup}>
      <button className={numberInputStyles.decrementBtn} onClick={handleDecrementCounter} disabled={quantity === 1}>
        <span className={numberInputStyles.btnText}>—</span>
      </button>
      <p className={numberInputStyles.count}>{quantity}</p>
      <button className={numberInputStyles.incrementBtn} onClick={handleIncrementCounter}>
        <span className={numberInputStyles.btnText}>+</span>
      </button>
    </div>
  );
}

NumberInput.propTypes = {
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func,
  updateCartItem: PropTypes.func,
  id: PropTypes.number,
};
