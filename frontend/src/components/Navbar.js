import React from "react";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";

const Navbar = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="Nav_container">
      <div className="Nav_wrapper">
        <div className="Nav_left">
          <img
            className="Logo"
            src="https://res.cloudinary.com/dehghhzey/image/upload/v1684640390/logo_glmbmg.jpg"
            alt="logo"
          />
        </div>
        <div className="Nav_center">
          <ul className="Nav_list">
            <li className="Nav_listItem">
              <Link to="/">HOME</Link>
            </li>
            <li className="Nav_listItem">
              <Link to="/Items">ITEMS</Link>
            </li>

            <li className="Nav_listItem">
              <Link to="CONTACTS">CONTACTS</Link>
            </li>
            <li className="Nav_listItem">
              <Link to="CREATE">Create</Link>
            </li>
          </ul>
        </div>
        <div className="Nav_right">
          <AiOutlineUser className="UserIcon" />
          <Link to="/cart" className="cart_container">
            <AiOutlineShoppingCart className="CartIcon" />
            <div className="Nav_CartQuantity">{products.length}</div>
          </Link>
          <button onClick={handleLogout} className="Logout">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
