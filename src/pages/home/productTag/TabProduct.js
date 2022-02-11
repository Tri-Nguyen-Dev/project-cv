import React, { useEffect, useState } from "react";
import categoryApi from "../../../api/categoryApi";
import productApi from "../../../api/productApi";
import ProductItem from "../../../components/productItem";
import "./tabProduct.scss";
import { Spin } from "antd";

function TabProduct() {
  const [categories, setCategories] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const [indexTagActive, setIndexTagActive] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getListCategory = async () => {
      try {
        const params = { _limit: 4 };
        const categoriApi = await categoryApi.getAll(params);
        const categoryId = categoriApi.data[indexTagActive].id;
        setLoading(true);
        const productCategoryApi = await productApi.getProductCategory(
          categoryId,
          { _limit: 8 }
        );

        setProductCategory(productCategoryApi.data);
        setCategories(categoriApi.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getListCategory();
  }, []);

  const handleChangeActiveTab = (index) => {
    setIndexTagActive(index);
    const getProductCategory = async () => {
      try {
        setLoading(true);
        const productCategoryApi = await productApi.getProductCategory(
          categories[index].id,
          { _limit: 8 }
        );
        setProductCategory(productCategoryApi.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProductCategory();
  };

  return (
    <section className="tab-product">
      <div className="tabs">
        {categories.map((item, index) => {
          return (
            <div
              onClick={() => handleChangeActiveTab(index)}
              className={
                index === indexTagActive ? "tab-item active" : "tab-item"
              }
              key={item.id}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="tab-content">
        {loading ? (
          <div className="tab-loading">
            <Spin size="large" />
          </div>
        ) : (
          ""
        )}
        <div className="row">
          {!loading &&
            productCategory.map((item, index) => {
              return (
                <div className="col l-3" key={index}>
                  <ProductItem product={item} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default TabProduct;
