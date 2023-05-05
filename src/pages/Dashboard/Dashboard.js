import React from "react";
import "./Dashboard.css";
import logo from "../../images/logo.png";
import MidImage from "../../images/midImage.png";
import AboutMariachi from "../../images/aboutMariachi.png";
import Food from "../../images/food.png";
import Discount from "../../images/discount.png";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";
const Dashboard = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="topContainer">
        <div className="topContainerLeftSide">
          <div className="logoTopContainerDesign">
            <img src={logo}></img>
          </div>
          <div className="mariachi">Mariachi</div>
          <div className="mariachiDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </div>
          <div className="orderNowButton">
            <Button
              text="ORDER NOW"
              backgroundColor={"rgba(255, 215, 173, 1)"}
              color="#4A1831"
              className="buttonClass"
            />
          </div>
        </div>
      </div>
      <div className="dontMissOurMenu">
        <div className="dontMissMenuHeading">Don’t Miss our Menu!</div>
        <div className="dontMissMenuDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </div>
        <div>
          <Button
            text="SEE MENU"
            backgroundColor={"#4A1831"}
            color="#FFD7AD"
            className="buttonClass"
          />
        </div>
      </div>
      <div className="midImage">
        <img src={MidImage}></img>
      </div>
      <div className="aboutMariachi">
        <div className="aboutMariachiLeftSide">
          <img src={AboutMariachi}></img>
        </div>
        <div className="aboutMariachiRightSide">
          <div className="aboutMariachiHeading">About Mariachi</div>
          <div className="aboutMariachiDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </div>
          <div>
            <Button
              text="TELL ME MORE"
              backgroundColor={"#4A1831"}
              color="#FFD7AD"
              className="buttonClass"
            />
          </div>
        </div>
      </div>
      <div className="discount">
        <div className="discountImage">
          <img src={Discount}></img>
        </div>
        <div className="discountOnTacos">
          <div className="twentyFivePercent">25%</div>
          <div className="discountSub">DISCOUNT</div>
          <div className="onTacos">ON TACOS!</div>
        </div>
      </div>
      <div className="seeOurOffers">
        <div className="seeOurOffersLeftSide">
          <div className="seeOurOffersHeading">See our Offers</div>
          <div className="seeOurOffersDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </div>
          <div>
            <Button
              text="SEE OFFERS"
              backgroundColor={"rgba(255, 215, 173, 1)"}
              color="#4A1831"
              className="buttonClass"
            />
          </div>
        </div>
        <div className="seeOurOffersRightSide">
          <img src={Food}></img>
        </div>
      </div>
      <div className="mariachiMore">
        <div>
          <img src={logo}></img>
        </div>
        <div className="mariachiMoreDetailed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="mariachiMoreDetailedBelow">Pedro Rodriguez</div>
      </div>
      <div className="getOurLatestOffers">
        <div className="getOurLatestOffersHeading">Get our Latest Offers!</div>
        <div className="getOurLatestOffersDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </div>
        <div className="enterEmail">
          <input placeholder="Enter Email" className="inputEnter"></input>{" "}
          <div className="buttonKey">
            <Button
              text="SUBSCRIBE"
              backgroundColor={"rgba(74, 24, 49, 1)"}
              color="#fff"
              className="buttonClassEnterEmail"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
