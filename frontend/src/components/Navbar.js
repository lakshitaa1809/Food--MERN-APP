import React, { useState } from "react";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";

const Navbar = () => {
  const { products } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const [showOrders, setShowOrders] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    dispatch(logout());
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
              <a href="#">Home</a>
            </li>
            <li className="Nav_listItem">
              <a href="#items">Items</a>
            </li>

            <li className="Nav_listItem">
              <a href="#contacts">Contacts</a>
            </li>
            <li className="Nav_listItem">
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </div>
        <div className="Nav_right">
          {" "}
          {!user ? (
            <AiOutlineUser className="UserIcon" />
          ) : (
            <h2
              className="UserIcon"
              onClick={() => setShowOrders((prev) => !prev)}
            >
              {user.username}
            </h2>
          )}
          {showOrders && (
            <div className="orders">
              <Link className="orders" to="/cart">
                <h3 className="orders">Orders</h3>
              </Link>
            </div>
          )}
          <Link className="orders" to="/cart">
            <AiOutlineShoppingCart className="CartIcon" />
            <div className="Nav_CartQuantity">{products.length}</div>
          </Link>
          {!user ? (
            <button onClick={handleLogin} className="Logout">
              Login
            </button>
          ) : (
            <button onClick={handleLogout} className="Logout">
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
