import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { addCart } from "../../redux/slices/CartSlice";
import { showToastMessage } from "../../redux/slices/ThemeSlice";
import "./style.scss";
import { Rating } from "react-simple-star-rating";

function ProductInfo({ product, hidenModal, ...settingsProduct }) {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const { buy } = settingsProduct;
  const [qty, setQty] = useState(1);
  const handlePlusQty = () => {
    if (qty >= 1) setQty(qty + 1);
  };
  const handleMinusQty = () => {
    if (qty > 1) setQty(qty - 1);
  };
  const handleBlurQty = (e) => {
    if (!e.target.value || qty <= 0) {
      setQty(1);
    }
  };
  const handleChangeQty = (e) => {
    setQty(e.target.value);
  };
  const [imgIndex, setImgIndex] = useState(0);

  const refImg = useRef();

  const handleAddCart = () => {
    dispatch(
      addCart({
        product,
        qty,
      })
    );
    if (hidenModal) hidenModal();
    dispatch(
      showToastMessage({
        type: "success",
        message: "Successfully added to cart",
      })
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setImgIndex(next);
    },
  };

  const sliderRef = useRef();

  const handleOnClick = (index) => {
    sliderRef.current.slickGoTo(index);
    setImgIndex(index);
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="product-info">
      <div className="product-info__image">
        {product.image_library ? (
          <Slider {...settings} ref={sliderRef}>
            {product.image_library.map((item, index) => {
              return (
                <div key={index}>
                  <img
                    ref={refImg}
                    className="product-info__image--img"
                    alt=""
                    src={item}
                  />
                </div>
              );
            })}
          </Slider>
        ) : (
          ""
        )}
      </div>

      <div className="product-info__info">
        <h3 className="product-info__product--name">{product.name}</h3>
        <p className="product-info__product--price">
          <span className="product-info__product--price--new">
            ${product.price}
          </span>
          <span className="product-info__product--price--old">$550.00</span>
        </p>
        <p className="product-info__product--rating">
          <Rating onClick={handleRating} ratingValue={rating} size={20} />
        </p>
        <div className="product-info__product--info">
          <div className="product-info__product--info--main">
            <p>
              <span>AVAILABILITY: </span>
              <span className="product-info__product--info--in-stock">
                IN STOCK <i className="far fa-check-square"></i>{" "}
              </span>
            </p>
            <p>
              <span>SKU: </span>
              <span className="product-info__product--info--sku">E-00024</span>
            </p>
            <p>
              <span>COLLECTIONS: </span>
              <span className="product-info__product--collection">
                Home page, Living Room
              </span>
            </p>
            <p>
              <span>TAGS: </span>
              <span className="product-info__product--tags">PINK</span>
            </p>
          </div>
          <p className="product-info__product--info--description">
            {product.description}
          </p>
        </div>
        <div className="product-info__product--qty">
          <span className="product-info__product--qty--input">
            <button
              onClick={handleMinusQty}
              className="product-info__product--qty--minus"
            >
              -
            </button>
            <input
              type="number"
              value={qty}
              onChange={handleChangeQty}
              onBlur={handleBlurQty}
            />
            <button
              onClick={handlePlusQty}
              className="product-info__product--qty--plus"
            >
              +
            </button>
          </span>
          <span className="product-info__product--qty--wish-list">
            <span>
              <i className="fas fa-heart"></i>
            </span>
            <span>ADD TO WISH LIST</span>
          </span>
        </div>
        <div
          className="product-info__product--add-to-cart"
          onClick={handleAddCart}
        >
          ADD TO CART
        </div>
        {buy ? (
          <div className="product-info__product--buy">BUY IT NOW</div>
        ) : (
          ""
        )}

        {buy ? (
          <div className="product-info__image--library">
            {product.image_library
              ? product.image_library.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => handleOnClick(index)}
                      className={
                        index === imgIndex
                          ? "image-library__item active"
                          : "image-library__item"
                      }
                    >
                      <img src={item} alt="" />
                    </div>
                  );
                })
              : ""}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ProductInfo;
