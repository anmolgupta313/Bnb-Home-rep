import React from "react";
import { useState } from "react";
import globe from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/globe.png";
import FooterToggleMenu from "./footerToggle";

export default function Footer() {
  const [footerToggle, setFooterToggle] = useState(false);

  function footerToggleArrow() {
    return setFooterToggle((prev) => !prev);
  }
  return (
    <section className="footer-section-main">
      <div className="footer-section-main-div">
        <div className="footer-div-first">
          <p className="footer-p">© 2023 Airbnb, Inc.</p>
          <p className="footer-dot">•</p>
          <p className="footer-p">Privacy</p>
          <p className="footer-dot">•</p>
          <p className="footer-p">Terms</p>
          <p className="footer-dot">•</p>
          <p className="footer-p">Sitemap</p>
          <p className="footer-dot">•</p>
          <p className="footer-p">Destinations</p>
        </div>
        <div className="footer-div-two">
          <div className="footer-globe-img-div">
            <img className="globe-footer" src={globe}></img>
          </div>
          <p className="footer-p-div2">English CA</p>
          <p className="footer-p-div2">$ CAD</p>
          <p className="footer-p-div2">Support & resources</p>
          <p className="uparrow" onClick={footerToggleArrow}>
            ⌃
          </p>
        </div>
      </div>
      {footerToggle ? (
        <FooterToggleMenu footerToggleArrowprop={footerToggleArrow} />
      ) : (
        ""
      )}
    </section>
  );
}
