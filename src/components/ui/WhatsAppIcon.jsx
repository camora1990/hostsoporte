import React from "react";
import "./WhatsAppIcon.scss";
export const WhatsAppIcon = () => {
  return (
    <div className="position-fixed top-50 end-0 me-lg-4" style={{zIndex:5000}}>
      <div className="whatsapp-container ">
        <a href="https://wa.me/573188267630" target="_blank">
          <div className="icon whatsapp">
            <div className="tooltip">Whatsapp</div>
            <span className="">
              <i className="fa-brands fa-whatsapp"></i>
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};
