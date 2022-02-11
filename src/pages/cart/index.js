import React from "react";
import "./style.scss";
import Qty from "../../components/qty";
import { useDispatch, useSelector } from "react-redux";
import { updateQTy } from "../../redux/slices/CartSlice";
import { countTotalCart, formatMonkey, handelRemoveCart } from "../../Handle";
import img1 from "../../assets/image/no-cart.ee48a725.png";
import { Link } from "react-router-dom";
import BreadcrumbCom from "../../components/breadcrumb/Breadcrumb";

function Cart() {
  const { carts } = useSelector((state) => state.carts);

  const dispatch = useDispatch();

  const changeQty = (qty, index) => {
    dispatch(updateQTy({ qty, index }));
  };

  return (
    <div className="cart">
      <div className="grid wide">
        <BreadcrumbCom page="Carts" />
        {carts.length > 0 ? (
          <div className="row">
            <div
              className="col l-8"
              style={{
                maxWidth: "100%",
                overflow: "scroll",
                paddingBottom: "12px",
              }}
            >
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>QTY</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {carts
                    ? carts.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <i
                                onClick={() =>
                                  handelRemoveCart(dispatch, index)
                                }
                                className="far fa-trash-alt"
                              ></i>
                            </td>
                            <td>
                              <div className="table__img">
                                <img
                                  width="95px"
                                  src={item.product.image[0]}
                                  alt=""
                                />
                                <span>{item.product.name}</span>
                              </div>
                            </td>
                            <td>${formatMonkey(item.product.price)}</td>
                            <td>
                              <Qty
                                quantity={item.qty}
                                changeQty={changeQty}
                                index={index}
                              />
                            </td>
                            <td>
                              ${formatMonkey(item.product.price * item.qty)}
                            </td>
                          </tr>
                        );
                      })
                    : ""}
                </tbody>
              </table>
              <div className="row cart__process">
                <div className="col l-6 c-12">
                  <div className="cart__check-out">CHECK OUT</div>
                </div>
                <div className="col l-6 c-12">
                  <div className="cart__continue">
                    <Link to="/products">CONTINUE SHOPPING</Link>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col l-4">
              <div className="cart__info">
                <div className="cart__info__heading">
                  THERE ARE {carts.length} ITEMS IN YOUR CART
                </div>
                <div className="cart__info__body">
                  <div className="cart__info--total">
                    <span>TOTAL:</span>
                    <span>${formatMonkey(countTotalCart(carts))}</span>
                  </div>
                  <div className="cart__info--ship">
                    <span>SHIPPING:</span>
                    <span>Shipping & taxes calculated at checkout</span>
                  </div>
                  <div className="cart__info--free">
                    <span>CONGRATULATIONS! YOU'VE GOT FREE SHIPPING!</span>
                    <i className="fas fa-truck"></i>
                  </div>
                  <div className="cart__info--order-free">
                    Free shipping for any orders above <span>$2,000.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
            }}
          >
            <img src={img1} alt="" style={{ maxWidth: "100%" }} />
            <p style={{ color: "rgb(254, 46, 46)" }}>
              Chưa có sản phẩm nào trong giỏ hàng...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
