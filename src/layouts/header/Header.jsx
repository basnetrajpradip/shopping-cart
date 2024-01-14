import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { FaBars, FaAngleUp } from "react-icons/fa";
import pathConstants from "../../routes/pathConstants";
import logoImage from "../../assets/images/1.png";
import stickyLogoImage from "../../assets/images/2.png";
import headerStyles from "./header.module.css";
import PropTypes from "prop-types";

export default function Header({ cartItem = [{ count: 0 }] }) {
  const [stickyNav, setStickyNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  function changeNav() {
    if (window.scrollY >= 112) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
      setIsMobile(false);
    }
  }

  function countCartItem() {
    let count = 0;
    cartItem.forEach((item) => (count += item.count));
    return count;
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <div className={headerStyles.mainContainer}>
      <div className={headerStyles.topContainer}>
        <div className={headerStyles.logo}>
          <Link to="/">
            <img src={logoImage} draggable="false" className={headerStyles.topLogo} alt="Logo"></img>
          </Link>
        </div>
        <div className={headerStyles.topHeaderIcons}>
          <IoIosSearch size="2rem" />
          <Link to={pathConstants.CART} className={headerStyles.cartIconContainer}>
            <GiShoppingCart size="2.4rem" />
            {cartItem.length > 0 && cartItem[0].count !== 0 && <div className={headerStyles.cartItemCount}>{countCartItem()}</div>}
          </Link>
        </div>
      </div>
      <div className={headerStyles.bottomContainer}>
        <NavLink to={pathConstants.HOME} className={({ isActive }) => (isActive ? headerStyles.active : headerStyles.navLink)}>
          HOME
        </NavLink>
        <NavLink to={pathConstants.SHOP} className={({ isActive }) => (isActive ? headerStyles.active : headerStyles.navLink)}>
          SHOP
        </NavLink>
        <NavLink to={pathConstants.ABOUT} className={({ isActive }) => (isActive ? headerStyles.active : headerStyles.navLink)}>
          ABOUT US
        </NavLink>
        <NavLink to={pathConstants.CART} className={({ isActive }) => (isActive ? headerStyles.active : headerStyles.navLink)}>
          MY CART
        </NavLink>
      </div>
      <div className={`${headerStyles.stickyHeaderContainer} ${stickyNav ? "" : headerStyles.hidden}`}>
        <div className={headerStyles.mobileMenu} onClick={() => setIsMobile(!isMobile)}>
          <FaBars size={"1.5rem"} color="white" />
        </div>
        <div className={headerStyles.stickyLogoContainer}>
          <Link to="/">
            <img src={stickyLogoImage} draggable="false" className={headerStyles.stickyLogo} alt="Sticky Logo"></img>
          </Link>
        </div>
        <div className={`${isMobile ? headerStyles.stickyNavsMobile : headerStyles.stickyNavs}`}>
          <NavLink to={pathConstants.HOME} className={({ isActive }) => `${isActive ? headerStyles.active : headerStyles.navLink} ${isMobile ? headerStyles.homeStickyNav : ""}`}>
            HOME
          </NavLink>
          <NavLink to={pathConstants.SHOP} className={({ isActive }) => `${isActive ? headerStyles.active : headerStyles.navLink} ${isMobile ? headerStyles.shopStickyNav : ""}`}>
            SHOP
          </NavLink>
          <NavLink to={pathConstants.ABOUT} className={({ isActive }) => `${isActive ? headerStyles.active : headerStyles.navLink} ${isMobile ? headerStyles.aboutStickyNav : ""}`}>
            ABOUT US
          </NavLink>
          <NavLink to={pathConstants.CART} className={({ isActive }) => `${isActive ? headerStyles.active : headerStyles.navLink} ${isMobile ? headerStyles.cartStickyNav : ""}`}>
            MY CART
          </NavLink>
          <div className={`${isMobile ? headerStyles.navDrawerIcon : headerStyles.hidden}`}>
            <FaAngleUp color="white" size={"2.5rem"} onClick={() => setIsMobile(!isMobile)} />
          </div>
        </div>
        <div>
          <div className={headerStyles.stickyHeaderIcons}>
            <IoIosSearch size="2rem" color="white" />
            <Link to={pathConstants.CART} className={headerStyles.cartIconContainer}>
              <GiShoppingCart size="2.3rem" color="white" />
              {cartItem.length > 0 && <div className={headerStyles.stickyCartItemCount}>{countCartItem()}</div>}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  cartItem: PropTypes.array,
};
