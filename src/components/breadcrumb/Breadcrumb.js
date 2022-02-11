import React from "react";
import "./style.scss";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

function BreadcrumbCom({ page, product }) {
  return (
    <div className="breadcrumb">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        {page === "Products" && product?.name ? (
          <Breadcrumb.Item>
            <Link to="/products"> {page}</Link>
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item>{page}</Breadcrumb.Item>
        )}

        <Breadcrumb.Item>{product?.name}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbCom;
