import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import errorStyles from "./error.module.css";
import { BsFillEmojiDizzyFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import pathConstants from "../../routes/pathConstants";
export default function ErrorPage() {
  return (
    <div className={errorStyles.errorPageRoot}>
      <Header></Header>
      <div className={errorStyles.errorInfo}>
        <div className={errorStyles.icon}>
          <BsFillEmojiDizzyFill size={"9rem"} color="#ff3131" />
        </div>
        <div className={errorStyles.errorHero}>
          <div className={errorStyles.errorValue}>404</div>
          <div className={errorStyles.errorName}>PAGE NOT FOUND</div>
          <div className={errorStyles.errorDetails}>The page you are looking for does&apos;t exist or an error occurred.</div>
        </div>
        <Link to={pathConstants.HOME}>
          <button className={errorStyles.homeBtn}>GO TO HOME</button>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
}
