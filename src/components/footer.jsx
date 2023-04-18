import React from "react";
import globe from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/globe.png"
export default function Footer() {
  return(
    <section className="footer-section-main
">
        <div className="footer-div">
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
        <div className="footer-div">
            <div className="footer-globe-img-div">
            <img className="globe-footer" src={globe}></img>
            </div>
            <p className="footer-p-div2">English CA</p>
            <p className="footer-p-div2">$ CAD</p>
            <p className="footer-p-div2">Support & resources</p>
            <p >{"<"}</p>
        </div>
    </section>
  )
}
