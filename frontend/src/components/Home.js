import React from "react";
import Hero from "./Hero";
import "./Home.css";
import illustration1 from "../assests/foodpanda-rider-opt.jpg";
import illustration2 from "../assests/deliver location img.jpg";
import illustration3 from "../assests/food-deliver.jpg";
import Foods from "./Food";

const Home = () => {
  return (
    <div className="Home_container">
      <div className="Home_wrapper">
        <Hero />
        <div className="Home_delivery">
          <div className="Home_titles">
            <span className="DeliverySubtitle">Delivery</span>
            <h2 className="DeliveryTitle">Always on time for you</h2>
          </div>
          <div className="DeliveryInfos">
            <div className="DeliveryInfo">
              <img src={illustration1} alt="" className="FirstImg" />
              <h3>Our staff works smart</h3>
            </div>
            <div className="DeliveryInfo">
              <img src={illustration2} alt="" className="SecondImg" />
              <h3>Our delivery staff is always on time</h3>
            </div>
            <div className="DeliveryInfo">
              <img src={illustration3} alt="" className="ThirdImg" />
              <h3>Our staff works friendly and social</h3>
            </div>
          </div>
        </div>

        <Foods />
      </div>
    </div>
  );
};

export default Home;
