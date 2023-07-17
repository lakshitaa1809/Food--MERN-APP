import React from "react";
import "./Details.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addProduct } from "../redux/cartSlice";

const Details = () => {
  const [foodDetails, setFoodsDetails] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.cart);
  console.log(products);

  useEffect(() => {
    const fetchFoodDetails = async () => {
      const res = await fetch(
        `https://food-app-8d87.onrender.com/product/find/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setFoodsDetails(data);
    };
    fetchFoodDetails();
  });

  const changeQuantity = (command) => {
    if (command === "dec") {
      if (quantity === 1) return;
      setQuantity((prev) => prev - 1);
    } else if (command === "inc") {
      setQuantity((prev) => prev + 1);
    }
  };

  const addToCart = () => {
    dispatch(addProduct({ ...foodDetails, quantity }));
  };

  return (
    <div className="Detail_container">
      <div className="Detail_wrapper">
        <div className="Detail_left">
          <img
            src={`https://food-app-8d87.onrender.com/images/${foodDetails?.img}`}
            alt="img"
          />
        </div>
        <div className="Detail_right">
          <h2 className="Detail_title">{foodDetails?.title}</h2>
          <div className="Detail_price">
            Price: <span>INR</span> {foodDetails?.price}
          </div>
          <div className="Detail_quantity">
            <button
              disabled={quantity === 1}
              onClick={() => changeQuantity("dec")}
            >
              -
            </button>
            <span className="Detail_quantityNumber">{quantity}</span>
            <button onClick={() => changeQuantity("inc")}>+</button>
          </div>
          <div className="Detail_category">
            <h3>Category: </h3>
            <span className="categoryName">{foodDetails?.category}</span>
          </div>
          <div className="Detail_productDesc">
            <div>Description: </div>
            <p>
              {foodDetails?.desc?.length > 50
                ? `${foodDetails?.desc}`.slice(0, 50)
                : foodDetails?.desc}
            </p>
          </div>
          <button onClick={addToCart} className="addToCart">
            Add To Cart <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
