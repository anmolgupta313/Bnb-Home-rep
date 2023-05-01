import React from "react";
import { useState } from "react";
import Addguest from "./addguest";
import logo from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/10290.ico";
import globe from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/globe.png";
import hamburger from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/hamburger.png";
import profile from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/profile.png";
import search from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/search.png";
import flexible from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/flexible.jpg";
import europe from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/europe.jpg";
import unitedstates from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/unitedstates.jpg";
import caribbean from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/caribbean.jpg";
import italy from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/italy.jpg";
import centralamerica from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/centralamerica.jpg";

export default function Nav(props) {
  const [showSearch, setShowSearch] = useState(true);
  const [searchRegion, setSearchRegion] =useState(false);
  const [addGuest, setAddguest] =useState(false);



  
  function filtertoggleOnRegion() {
    setShowSearch(false)
    setSearchRegion(true)
  }

  function filtertoggleOnaddGuest() {
    setShowSearch(false)
    setAddguest(true)
  }

  // console.log(showSearch,"Sss")
  function allfilterOff(){
    return setSearchRegion(false)
  }



  function searchRegionOn(){
    return setSearchRegion((prev)=>{
      return !prev
    })
  }
  function filtertoggleOff() {
    return setShowSearch((prev) => {
      return prev === false;
    });
  }

  console.log(searchRegion,"ss")
  return (
    <nav>
      {showSearch === false && (
        <div
          className="destination-form-main-section"
          onClick={filtertoggleOff}
        ></div>
      )}
      <section className="main-nav-section">
        <section className="logo-section">
          <div className="logo">
            <img src={logo}></img>
          </div>
        </section>
        {showSearch === true ? (
          <section className="nav-search">
            <div onClick={filtertoggleOnRegion}>
              <p>Anywhere</p>
            </div>
            <div className="one"></div>
            <div>
              <p>Any week</p>
            </div>
            <div className="one"></div>
            <div className="add-guest">
              <div onClick={filtertoggleOnaddGuest}>
                <p>Add guests</p>
              </div>
              <div>
                <img src={search} alt="search-icon"></img>
              </div>
            </div>
          </section>
        ) : (
          <section className="nav-search-two">
            <div>
              <p>Stays</p>
            </div>
            <div>
              <p>Experiences</p>
            </div>
            <div>
              <p>Online Experiences</p>
            </div>
          </section>
        )}
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

      {showSearch === false && (
        <section>
          <div className="destination-form-upper-div" onClick={allfilterOff}>
            <div className="destination-form-lower-div">
              <div className="mainwhere" onClick={searchRegionOn}>
                <div className="where-div">
                  <label >
                    {" "}
                    <div className="form-title-search" >Where</div>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      placeholder="Search destinations"
                    ></input>
                  </label>
                </div>
              </div>
              <div className="mainwhere">
                <div className="check-in-out">
                  <div className="form-title-search">Check in</div>
                  <div className="form-sub-title">Add dates</div>
                </div>
              </div>
              <div className="mainwhere">
                <div className="check-in-out">
                  <div className="form-title-search">Check out</div>
                  <div className="form-sub-title">Add dates</div>
                </div>
              </div>
              <div className="mainwhere">
                <div className="who-guests">
                  <div className="add-guest-two">
                    <div className="form-title-search">Who</div>
                    <div className="form-sub-title">Add guests</div>
                  </div>
                  <div className="search-icon">
                    <img
                      className="search-icon-img"
                      src={search}
                      alt="search-icon"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
         {searchRegion===true && <div className="search-region-main-div">
            <div className="search-region-title-div">
              <p>Seacrh by region</p>
            </div>
            <div className="search-region-content-div">
              <div className="serach-region-content-sub-div-one">
                <div className="search-region-content-sub-div">
                  <div className="imggggg">
                    <img className="search-region-img" src={europe}></img>
                  </div>
                  <div>
                    <p>I'm flexible</p>
                  </div>
                </div>
                <div className="search-region-content-sub-div">
                  <div className="imggggg">
                    <img className="search-region-img" src={europe}></img>
                  </div>
                  <div>
                    <p>Europe</p>
                  </div>
                </div>
                <div className="search-region-content-sub-div">
                  <div className="imggggg">
                    <img className="search-region-img" src={unitedstates}></img>
                  </div>
                  <div>
                    <p>United States</p>
                  </div>
                </div>
              </div>
              <div className="serach-region-content-sub-div-one">
                <div className="search-region-content-sub-div">
                  <div className="imggggg">
                    <img className="search-region-img" src={caribbean}></img>
                  </div>
                  <div>
                    <p>Caribbean</p>
                  </div>
                </div>
                <div className="search-region-content-sub-div">
                  <div className="imggggg">
                    <img className="search-region-img" src={italy}></img>
                  </div>
                  <div>
                    <p>Italy</p>
                  </div>
                </div>
                <div className="search-region-content-sub-div">
                  <div className="imggggg">
                    <img
                      className="search-region-img"
                      src={centralamerica}
                    ></img>
                  </div>
                  <div>
                    <p>Central America</p>
                  </div>
                </div>
              </div>
            </div>
          </div> }
{addGuest===true && <div><Addguest /></div>}
        </section>
      )}
    </nav>
  );
}
