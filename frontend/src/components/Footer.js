import React from "react";
import "./Footer.css";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <section className="Footer_container">
      <div className="Footer_wrapper">
        <div className="col">
          <h2 className="Footer_title">Working days</h2>
          <div className="Footer_list">
            <div>
              <h2>Monday - Friday</h2>
              <h3 className="workingTime">08:00 - 22:00</h3>
            </div>
            <div className="Footer_sat">
              <h2>Saturday</h2>
              <h3 className="workingTime">08:00 - 20:00</h3>
            </div>
          </div>
        </div>
        <div className="col1">
          <h2 className="Footer_title1">Social Media</h2>
          <ul className="iconList">
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <AiFillFacebook />
            </li>
            <li>
              <AiFillTwitterCircle />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
