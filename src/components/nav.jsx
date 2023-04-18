import React from "react";
import logo from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/10290.ico"
import globe from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/globe.png"
import hamburger from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/hamburger.png"
import profile from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/profile.png"
export default function Nav(props) {
    return (
        <nav>
            <section className="logo-section">
                <div className="logo">
                    <img src={logo}></img>
                </div>
            </section>
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
                {props.drop &&(
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
        </nav>
    )
}