import React from "react";
import "./Hero.css";
import { AiOutlineArrowDown } from "react-icons/ai";

const Hero = () => {
  return (
    <div>
      <section id="Home" className="Hero_container">
        <div className="Hero_wrapper">
          <div className="Hero_left">
            <h2 className="Hero_title">
              Want a delicious food but no time? We will deliver it hot and
              yummy.
            </h2>
            <p className="Hero_firstMsg">
              No need to come to us <span>Just Make a Call....</span>
            </p>
            <p className="Hero_secondMsg">
              Why are you waiting...<span> Order</span> ur favourite <br />{" "}
              <span>and get delicious </span>
              from our restaurant.
            </p>
            <p className="Hero_desc">
              Our restaurant always puts the best service to fulfill your
              expectations. Straight out of the oven to your doorstep.
            </p>
            <div className="Hero_buttons">
              <button className="ButtonOrder">Order now!</button>
              <button className="ButtonSee">
                <a href="#foods">
                  See what's available <AiOutlineArrowDown />{" "}
                </a>
              </button>
            </div>
          </div>
          <div className="Hero_right">
            <img
              src="https://res.cloudinary.com/dehghhzey/image/upload/v1684751198/food2_tfjgan.jpg"
              alt=""
              className="Heroimg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
