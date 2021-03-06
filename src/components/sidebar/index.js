import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { hidenSidebar } from "../../redux/slices/ThemeSlice";
import "./style.scss";

function Sidebar() {
  const { isShowSidebar } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [listNavbars, setlistNavbars] = useState([
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "Cart",
      path: "/carts",
    },

    {
      title: "Contact",
      path: "/contact",
    },
  ]);

  const handleDropdowns = (indexItem) => {
    const newlistNavbars = listNavbars.map((item, index) => {
      if (index === indexItem) {
        item.dropdowns.isDropdown = !item.dropdowns.isDropdown;
      }
      if (index !== indexItem && item.dropdowns) {
        item.dropdowns.isDropdown = false;
      }
      return item;
    });

    setlistNavbars(newlistNavbars);
  };

  const handelRemoveSidebar = () => {
    dispatch(hidenSidebar());
  };
  return (
    <section className={!isShowSidebar ? "sidebar" : "sidebar show"}>
      <div className="sidebar__header">
        <NavLink to="/">TriDeMO</NavLink>
        <div className="sidebar__close" onClick={handelRemoveSidebar}>
          <i className="far fa-times-circle"></i>
        </div>
      </div>
      <div className="sidebar__main">
        <div className="sidebar__navbar">
          <ul className="sidebar__navbar--list">
            {listNavbars.map((item, index) => {
              return (
                <li className="sidebar__navbar--item" key={index}>
                  <div className="sidebar__navbar--parent">
                    <NavLink
                      onClick={handelRemoveSidebar}
                      exact
                      activeClassName="sidebar__navbar--active"
                      className="sidebar__navbar--link"
                      to={item.path}
                    >
                      {item.title}
                    </NavLink>
                    {item.dropdowns ? (
                      <span
                        onClick={() => handleDropdowns(index)}
                        className="sidebar__navbar--icon"
                      >
                        <i
                          className={
                            item.dropdowns.isDropdown
                              ? "fas fa-caret-down"
                              : "fas fa-caret-right"
                          }
                        ></i>
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  {item.dropdowns ? (
                    <ul
                      className={
                        item.dropdowns.isDropdown
                          ? "sidebar__navbar--dropdown show"
                          : "sidebar__navbar--dropdown"
                      }
                    >
                      {item.dropdowns.listDropDowns.map((item, index) => {
                        return (
                          <li
                            className="sidebar__navbar--dropdown-item"
                            key={index}
                            onClick={handelRemoveSidebar}
                          >
                            <NavLink to="/">{item}</NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="sidebar__footer">
        <div className="sidebar__footer--social">
          <a
            href="https://www.facebook.com/thien.tri.5477/"
            target="social-icon"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.facebook.com/thien.tri.5477/"
            target="social-icon"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.facebook.com/thien.tri.5477/"
            target="social-icon"
            rel="noopener noreferrer"
          >
            <i className="fab fa-google"></i>
          </a>
          <a
            href="https://www.facebook.com/thien.tri.5477/"
            target="social-icon"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.facebook.com/thien.tri.5477/"
            target="social-icon"
            rel="noopener noreferrer"
          >
            <i className="fab fa-vimeo-v"></i>
          </a>
        </div>
        <div className="sidebar__footer--copyright">
          Copyright ?? 2020 Vinovathemes. All rights reserved.
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
