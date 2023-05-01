import React, { useState } from "react";
import plus from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/plus.png"
import minus from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/minus.png"

export default function Addguest() {

    const [count,setCount] = useState(0)

    function addCount(e){
  console.log(e.target.id,"plus")
        // return setCount(count+1) 
        return setCount((count)=>{
           return  e.target.id==="first"? count+1: 0
        }) 
    }

    function minusCount(e){
        console.log(e.target.id,"minus")
        return setCount((count)=>{
 return count>0 ? count-1 : count
        })
    }
  return (
    <section className="addguest-main-section">
      <div className="addguest-sub-div">
        <div className="addguest-sub-div-content-one">
          <div className="title">
            <p>Adults</p>
          </div>
          <div className="subheading">
            <p>Ages 13 or above</p>
          </div>
        </div>
        <div className="addguest-sub-div-content-two">
         <img className="plus-minu" id="first" onClick={minusCount} src={minus}></img>
          <div className="count-div"><p>{count}</p></div>
        <img className="plus-minu"  id="first" onClick={addCount} src={plus}></img>
        </div>
      </div>
      <hr></hr>
      <div className="addguest-sub-div">
        <div className="addguest-sub-div-content-one">
          <div className="title">
            <p>Children</p>
          </div>
          <div className="subheading">
            <p>Ages 2-12</p>
          </div>
        </div>
        <div className="addguest-sub-div-content-two">
         <img className="plus-minu"  id="second" onClick={minusCount} src={minus}></img>
          <div className="count-div"><p>{count}</p></div>
        <img className="plus-minu"  id="second" onClick={addCount} src={plus}></img>
        </div>
      </div>
      <hr></hr>
      <div className="addguest-sub-div">
        <div className="addguest-sub-div-content-one">
          <div className="title">
            <p>Infants</p>
          </div>
          <div className="subheading">
            <p>Under 2</p>
          </div>
        </div>
        <div className="addguest-sub-div-content-two">
         <img className="plus-minu"  id="third" onClick={minusCount} src={minus}></img>
          <div className="count-div"><p>{count}</p></div>
        <img className="plus-minu" id="third" onClick={addCount} src={plus}></img>
        </div>
      </div>
      <hr></hr>
      <div className="addguest-sub-div">
        <div className="addguest-sub-div-content-one">
          <div className="title">
            <p>Pets</p>
          </div>
          <div className="subheading">
            <p>Bringing a service animal</p>
          </div>
        </div>
        <div className="addguest-sub-div-content-two">
         <img className="plus-minu"  id="fourth" onClick={minusCount} src={minus}></img>
          <div className="count-div"><p>{count}</p></div>
        <img className="plus-minu"  id="fourth" onClick={addCount} src={plus}></img>
        </div>
      </div>
    </section>
  );
}
