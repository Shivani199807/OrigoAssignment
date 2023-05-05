import React from "react";
import Facebook from "../../images/Facebook.png";
import Instagram from "../../images/Instagram.png";
import Twitter from "../../images/Twitter.png";
import Whatsapp from "../../images/WhatsApp.png";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="mainFooterDiv ">
        <div className="column  newDesigning">
          <div className="headingColumn">Mariachi</div>
          <ul className="columnsFooter">
            <li className="footerLinks">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at
              dignissim enim.
            </li>
            <li className="footerLinks">
              <img src={Facebook} className="imagePadding"></img>
              <img src={Instagram} className="imagePadding"></img>
              <img src={Twitter} className="imagePadding"></img>
              <img src={Whatsapp} className="imagePadding"></img>
            </li>
          </ul>
        </div>
        <div className="column wrapUpColumn">
          <div className="headingColumn">About</div>
          <ul className="columnsFooter">
            <li className="footerLinks">History</li>
            <li className="footerLinks">Our Team</li>
            <li className="footerLinks">Brand Guidelines</li>
            <li className="footerLinks">Terms & Condition</li>
            <li className="footerLinks">Privacy Policy</li>
          </ul>
        </div>

        <div className="column wrapUpColumn belowData">
          <div className="headingColumn">Services</div>
          <ul className="columnsFooter">
            <li className="footerLinks">How to Order </li>
            <li className="footerLinks">Our Product</li>
            <li className="footerLinks">Offers</li>
            <li className="footerLinks">Promo</li>
            <li className="footerLinks">Payment Method</li>
          </ul>
        </div>
        <div className="column wrapUpColumn belowData">
          <div className="headingColumn">Other</div>
          <ul className="columnsFooter">
            <li className="footerLinks">Contact Us </li>
            <li className="footerLinks">Help</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
