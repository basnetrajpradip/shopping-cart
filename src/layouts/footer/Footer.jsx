import footerStyles from "./footer.module.css";
import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { BsChat } from "react-icons/bs";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={footerStyles.mainContainer}>
      <div className={footerStyles.topContainer}>
        <div className={footerStyles.topTitle}>
          BE A PART OF THE{" "}
          <div>
            MERO <span>दोकान</span>
          </div>
        </div>
        <div className={footerStyles.topPromo}>Enjoy 10% off on your first purchase when you sign up!</div>
        <div className={footerStyles.topForm}>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter your email here"></input>
            <button type="submit" className={footerStyles.btn}>
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div className={footerStyles.middleContainer}>
        <div className={footerStyles.middleTop}>
          <div className={footerStyles.leftSection}>
            <div className={footerStyles.company}>
              <div className={footerStyles.leftSectionHeader}>COMPANY</div>
              <a className={footerStyles.leftSectionItem} href="#">
                Our Story
              </a>
              <a className={footerStyles.leftSectionItem} href="#">
                Shop Locations
              </a>
              <a className={footerStyles.leftSectionItem} href="#">
                Authenticity
              </a>
              <a className={footerStyles.leftSectionItem} href="#">
                Reliability
              </a>
              <a className={footerStyles.leftSectionItem} href="#">
                Philanthropy
              </a>
            </div>
            <div className={footerStyles.brand}>
              <div className={footerStyles.leftSectionHeader}>BRAND</div>
              <a className={footerStyles.leftSectionItem} href="#">
                Style and Fit
              </a>
              <a className={footerStyles.leftSectionItem} href="#">
                Craftmanship
              </a>
              <a className={footerStyles.leftSectionItem} href="#">
                Reviews
              </a>
              <a className={footerStyles.leftSectionItem} href="#">
                Blog
              </a>
              <a className={footerStyles.leftSectionItem} href="#">
                Press
              </a>
            </div>
            <div className={footerStyles.help}>
              <div className={footerStyles.leftSectionHeader}>HELP</div>
              <a className={footerStyles.leftSectionItem} href="#">
                Shipping & Returns
              </a>
              <a className={footerStyles.leftSectionItem} href="#">
                Repairs
              </a>
              <a className={footerStyles.leftSectionItem} href="#">
                Warranty
              </a>
              <a className={footerStyles.leftSectionItem} href="#">
                FAQ&apos;s
              </a>
              <a className={footerStyles.leftSectionItem} href="#">
                Contact Us
              </a>
            </div>
          </div>
          <div className={footerStyles.rightSection}>
            <div className={footerStyles.rightTop}>
              <div className={footerStyles.customerCareHeader}>ASK TO CUSTOMER CARE</div>
              <div className={footerStyles.customerCareMore}>If you have any questions or queries, We&apos;re here to assist!</div>
            </div>
            <div className={footerStyles.rightBottom}>
              <div className={footerStyles.phone}>
                <FaPhoneAlt size={"1.4rem"} />
                <div>+977 01 1400000</div>
              </div>
              <div className={footerStyles.mail}>
                <TfiEmail size={"1.4rem"} />
                <div>support@merodokan.xyz</div>
              </div>
              <div className={footerStyles.chat}>
                <BsChat size={"1.4rem"} />
                <div>Chat With Us</div>
              </div>
            </div>
          </div>
        </div>
        <div className={footerStyles.middleBottom}>
          <div>© 2023 Mero दोकान</div>
          <a href="#">Privacy</a>
          <a href="#">Accessibility</a>
          <a href="#">Terms of Service</a>
          <a href="#">Refund Policy</a>
          <a href="#">Conformity</a>
        </div>
      </div>
      <div className={footerStyles.bottomContainer}>
        <a href="https://github.com/basnetrajpradip" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          <div>Developed by Pradip Raj Basnet</div>
        </a>
        <div className={footerStyles.bottomSection}>© copyright 2023 Pradip Raj Basnet. All rights reserved</div>
      </div>
    </div>
  );
}
