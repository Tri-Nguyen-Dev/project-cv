import React from "react";
import Slider from "react-slick";
import "./style.scss";
import ProductItem from "../productItem";
import { Spin } from "antd";

function ProductSlider({ products, title, loading }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="product-slider">
      <div className="product-slider__heading">
        <h3>{title}</h3>
      </div>
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <Spin size="large" />
        </div>
      ) : (
        ""
      )}
      <div className="product-slider__content">
        {!loading && (
          <Slider {...settings}>
            {products.map((item, index) => (
              <ProductItem key={index} product={item} />
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
}

export default ProductSlider;
