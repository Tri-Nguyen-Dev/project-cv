import React, { useEffect, useRef, useState } from "react";
import Banner from "../../components/banner";
import "./style.scss";
import ProductSlider from "../../components/productSlider";
import TabProduct from "./productTag/TabProduct";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../redux/slices/ProductSlice";
import { isInViewport } from "../../Handle";
import Services from "./services/Services";

import imgTest1 from "../../assets/image/test1.jpg";
import imgTest2 from "../../assets/image/test2.jpg";

function Home() {
  const { products } = useSelector((state) => state.products);
  const [loading, setLoading] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await dispatch(
          fetchAllProducts({
            _limit: 10,
            _page: 1,
          })
        );
        setLoading(false);
      } catch (error) {}
    };

    fetchData();
  }, [dispatch]);

  const refHello = useRef();

  useEffect(() => {
    const lazyLoad = () => {
      if (refHello.current) {
        if (isInViewport(refHello.current)) {
          refHello.current.classList.add("scrolled");
        } else {
          refHello.current.classList.remove("scrolled");
        }
      }
    };
    window.addEventListener("scroll", lazyLoad);
    return () => {
      window.removeEventListener("scroll", lazyLoad);
    };
  });

  return (
    <div className="home">
      <Banner />
      <div className="grid wide">
        <Services />
      </div>
      <div className="grid wide">
        <ProductSlider
          title="WEEKLY TOP PICKS"
          products={products.data ? products.data : []}
          loading={loading}
        />
      </div>
      <div className="grid wide">
        <TabProduct />
      </div>
      <div className="img__test">
        <div ref={refHello} className="content">
          <div className="content-wapper">
            <img src={imgTest1} alt="" />
            <div className="content-description">
              <h3 className="content-heading">
                Unique Features Of leatest & Trending Poducts
              </h3>
              <ul className="content-list">
                <li>
                  All frames constructed with hardwood solids and laminates
                </li>
                <li>
                  Reinforced with double wood dowels, glue, screw - nails corner
                  blocks and machine nails
                </li>
                <li>Arms, backs and seats are structurally reinforced</li>
              </ul>
              <div className="content-action">
                <div className="content-btn">Add To Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
