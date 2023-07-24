import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { removeProduct } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let totalPrice = 0;

  products.map((product) => (totalPrice += product.quantity * product.price));

  const handleRemoveProduct = (id) => {
    console.log(id);
    dispatch(removeProduct({ _id: id }));
  };

  const handleOrder = () => {
    if (products.length > 0) {
      navigate("/checkout");
    }
  };

  return (
    <div className="Cart_container">
      <div className="Cart_wrapper">
        <div className="Cart_left">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className="Cart_product">
                <div
                  onClick={() => handleRemoveProduct(product._id)}
                  className="Cart_closeBtn"
                >
                  <AiOutlineClose />
                </div>
                <img
                  src={`https://food-app-8d87.onrender.com/images/${product.img}`}
                  className="Card_img"
                  alt="Card_img"
                />
                <div className="Cart_productData">
                  <h3 className="Cart_title">{product.title}</h3>
                  <div className="Cart_productAndQuantity">
                    <span className="Cart_quantity">
                      Total Quantity:{product.quantity}{" "}
                    </span>
                    <span className="Cart_price">
                      <span>INR </span>
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="Cart_noProducts">
              No products in the cart. Go shopping!
            </h1>
          )}
        </div>
        <div className="Cart_right">
          <div className="Cart_totalProductMsg">
            Total products: {products.length}
          </div>
          <div className="Cart_subtotalCheckoutBtns">
            <span className="Cart_subtotal">Total: INR {totalPrice}</span>
            <span
              onClick={handleOrder}
              disabled={products.length === 0}
              className="Card_orderNowBtn"
            >
              Order now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
