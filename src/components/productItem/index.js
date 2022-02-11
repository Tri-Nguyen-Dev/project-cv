import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { showModal } from "../../redux/slices/ThemeSlice";
import "./style.scss";
import { formatMonkey, handleAddCart } from "../../Handle";
import { message } from "antd";
import { Tooltip } from "antd";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handelShowProductDetail = () => {
    dispatch(showModal(product));
  };

  const success = () => {
    message.success("add your favorite successfully!");
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <span className="product__new">New</span>
        <span className="product__sale">-46%</span>
        <NavLink to={`/product-detail/${product.id}`}>
          <img
            className="product__img--1"
            src={product.image[0]}
            alt=""
            width="100%"
          />
        </NavLink>
        <NavLink to={`/product-detail/${product.id}`}>
          <img
            className="product__img--2"
            src={product.image[1]}
            alt=""
            width="100%"
          />
        </NavLink>
        <div className="product__item--action">
          <Tooltip title="add to wishlist">
            <span onClick={success}>
              <i className="fas fa-heart"></i>
            </span>
          </Tooltip>

          <Tooltip title="view quickly">
            <span onClick={handelShowProductDetail}>
              <i className="fas fa-info-circle"></i>
            </span>
          </Tooltip>
        </div>
      </div>
      <div className="product__info">
        <p className="product__name">
          <NavLink to={`/product-detail/${product.id}`}>{product.name}</NavLink>
        </p>
        <p className="product__price">
          <span className="product__price--new">
            ${formatMonkey(product.price)}
          </span>
          <span className="product__price--old">$550.00</span>
        </p>
      </div>
      <div
        className="product--add-cart"
        onClick={() => handleAddCart(dispatch, product)}
      >
        ADD TO CART
      </div>
    </div>
  );
}

export default ProductItem;
