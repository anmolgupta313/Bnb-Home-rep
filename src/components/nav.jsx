import React from "react";
import { useState } from "react";
import logo from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/10290.ico";
import globe from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/globe.png";
import hamburger from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/hamburger.png";
import profile from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/profile.png";
import search from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/search.png"
export default function Nav(props) {

  const [showSearch, setShowSearch] = useState(true)
  return (
    <nav>
      <section className="main-nav-section">
      <section className="logo-section">
        <div className="logo">
          <img src={logo}></img>
        </div>
      </section>
      {showSearch=== true ? (<section className="nav-search">
        <div >
          <p>Anywhere</p>
        </div>
        <div className="one"></div>
        <div>
            <p>Any week</p>
        </div>
        <div className="one"></div>
        <div className="add-guest">
          <div>
            <p>Add guests</p>
          </div>
          <div>
            <img src={search} alt="search-icon"></img>
          </div>
        </div>
      </section>):(<section className="nav-search-two">
        <div>
<p>Stays</p>
        </div>
        <div>
          <p>Experiences</p>
        </div>
        <div>
<p>Online Experiences</p>
        </div>
      </section>)}
      <section className="rest-section">
        <div className="airbnb-your-home">
          <p className="airbnb-your-home">Airbnb your home</p>
        </div>
        <div className="globe-div">
          <img src={globe} className="globe"></img>
        </div>
        <div className="account" onClick={props.toggle}>
          <div>
            <img src={hamburger} className="hamburger"></img>
          </div>
          <div>
            <img src={profile}></img>
          </div>
        </div>
        {props.drop && (
          <div className="account-list">
            <ul>
              <li className="sign-up">Sign up</li>
              <li>Login</li>
            </ul>
            <hr></hr>
            <ul>
              <li>Airbnb your home</li>
              <li>Help</li>
            </ul>
          </div>
        )}
      </section> 
      </section>

      {showSearch=== false &&
      <section className="destination-form-main-section">
       <div className="destination-form-upper-div">
        <div className="destination-form-lower-div">
          <div className="where-div">
<label> <div className="form-title-search">Where</div>
  <input
  type="text"
  id="destination"
  name="destination"
  placeholder="Search destinations"></input>
</label>
          </div>
          <div className="check-in-out">
<div className="form-title-search">Check in</div>
<div className="form-sub-title">Add dates</div>
          </div>
          <div className="check-in-out">
          <div className="form-title-search">Check out</div>
<div className="form-sub-title">Add dates</div>
          </div>
          <div className="who-guests">
            <div className="add-guest-two">
            <div className="form-title-search">Who</div>
<div className="form-sub-title">Add guests</div>
            </div>
            <div className="search-icon">
            <img className="search-icon-img" src={search} alt="search-icon"></img>
            </div>
           
          </div>
        </div>
       </div>
      </section> }
    </nav>
  );
}
