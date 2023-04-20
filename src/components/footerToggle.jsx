import React from "react";
import x from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/x.png"
export default function FooterToggleMenu( props) {
  return (
    <section className="footer-section-main-toogle">
        <div className="footer-div-main-toogle">
          <div  onClick={props.footerToggleArrowprop} className="toogle-sub-div"><img className="x" src={x} alt="x" /></div>
      <div className="toogle-sub-div">
        <h6>Support</h6>
        <p>Help Centre</p>
        <p>AirCover</p>
        <p>Supporting people with disabilities</p>
        <p>Cancellation options</p>
        <p>Our COVID-19 Response</p>
        <p>Report a neighbourhood concern</p>
      </div>
      <div className="toogle-sub-div">
        <h6>Community</h6>
        <p>Airbnb.org: disaster relief housing</p>
        <p>Combating discrimination</p>
      </div>
      <div className="toogle-sub-div">
        <h6>Hosting</h6>
        <p>Airbnb your home</p>
        <p>AirCover for Hosts</p>
        <p>Explore hosting resources</p>
        <p>Visit our community forum</p>
        <p>How to host responsibly</p>
      </div>
      <div className="toogle-sub-div">
      <h6>Airbnb</h6>
        <p>Newsroom</p>
        <p>Learn about new features</p>
        <p>Letter from our founders</p>
        <p>Careers</p>
        <p>Investors</p>
        <p>Gift cards</p>
      </div>
      </div>
    </section>
  );
}
