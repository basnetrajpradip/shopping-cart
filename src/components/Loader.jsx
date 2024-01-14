import { FaSpinner } from "react-icons/fa";
import loadingStyles from "./loader.module.css";

export default function Loader() {
  return (
    <div className={loadingStyles.container}>
      <FaSpinner className={loadingStyles.loadingIcon} />
    </div>
  );
}
