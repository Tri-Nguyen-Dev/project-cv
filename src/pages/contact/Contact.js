import React from "react";
import "./style.scss";
import { Button, Input } from "antd";
import BreadcrumbCom from "../../components/breadcrumb/Breadcrumb";

function Contact() {
  const { TextArea } = Input;
  return (
    <div className="contact">
      <div className="grid wide">
        <BreadcrumbCom page="Contact" />
        <h3 className="contact-heading">Contact Us</h3>
        <div className="row">
          <div className="col l-6 c-12 contact-input-item">
            <Input size="large" placeholder="Enter name" />
          </div>
          <div className="col l-6 c-12 contact-input-item">
            <Input size="large" placeholder="Enter email" />
          </div>
          <div className="col l-12 c-12 contact-input-item">
            <TextArea rows={2} size="large" placeholder="Enter description" />
          </div>
          <div className="col l-12 c-12 contact-input-item">
            <TextArea rows={4} size="large" placeholder="Enter content" />
          </div>

          <div className="contact-submit">
            <Button type="primary" size="large">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
