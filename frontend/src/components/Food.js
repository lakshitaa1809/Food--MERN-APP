import React from "react";
import { foodTypes } from "../data/data";
import { Link } from "react-router-dom";
import "./Food.css";

const Foods = () => {
  return (
    <section id="foods" className="food_container">
      <div className="food_wrapper">
        <h4 className="food_subtitle">What we offer</h4>
        <h2 className="food_title">Best meals in the city</h2>
        <div className="food_foods">
          {foodTypes.map((foodType) => (
            <Link
              to={`/foods/${foodType?.name}`}
              key={foodType?.id}
              className="food"
            >
              <h4 className="food_name">{foodType.name}</h4>
              <div className="imgContainer">
                <img src={foodType?.img} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Foods;
