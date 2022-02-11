import React from "react";
import img1 from "../../../assets/image/Group.png";
import img2 from "../../../assets/image/Group2.png";
import img3 from "../../../assets/image/cashback1.png";
import img4 from "../../../assets/image/24-hours-support1.png";
import "./style.scss";

function Services() {
  return (
    <div className="services">
      <h3 className="services-heading">WHAT SHOPEX OFFER</h3>
      <div className="row">
        <div className="col l-3 services-item">
          <div className="services-img">
            <img src={img1} alt="" />
          </div>
          <div className="services-title">24/7 Support</div>
          <div className="services-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </div>
        </div>

        <div className="col l-3 services-item">
          <div className="services-img">
            <img src={img2} alt="" />
          </div>
          <div className="services-title">Free Ship</div>
          <div className="services-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </div>
        </div>

        <div className="col l-3 services-item">
          <div className="services-img">
            <img src={img3} alt="" />
          </div>
          <div className="services-title">Contact</div>
          <div className="services-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </div>
        </div>

        <div className="col l-3 services-item">
          <div className="services-img">
            <img src={img4} alt="" />
          </div>
          <div className="services-title">Quickly</div>
          <div className="services-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
