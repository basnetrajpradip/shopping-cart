import PropTypes from "prop-types";
import cardStyles from "./card.module.css";

export default function Card({ title, price, imgUrl }) {
  return (
    <>
      <div className={cardStyles.cardContainer}>
        <div className={cardStyles.imgContainer}>
          <img src={imgUrl} className={cardStyles.img} draggable={false}></img>
        </div>
        <div className={cardStyles.productInfo}>
          <div className={cardStyles.productTitle}>{title}</div>
          <div className={cardStyles.productPricing}>{`Price : $${price}`}</div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
