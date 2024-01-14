import homeStyles from "./home.module.css";
import cartImg from "../../assets/images/cart.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={homeStyles.mainContainer}>
      <div className={homeStyles.heroSection}>
        <div className={homeStyles.heroImage}>
          <div className={homeStyles.heroText}>
            <div>
              YOUR ONE STOP
              <br /> DESTINATION FOR ALL
              <br /> YOUR SHOPPING NEEDS.
              <div className={homeStyles.heroTextDeco}>
                MERO<span>दोकान</span>
              </div>
            </div>
            <img src={cartImg} className={homeStyles.img} draggable={false}></img>
          </div>
          <Link to={"/shop"} className={homeStyles.btnLink}>
            <button className={homeStyles.btn}> Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
