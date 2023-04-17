import React, { useState, useRef } from "react"
import { homeData } from "./homeData"
import filter1 from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/10283.jpg"
import filter2 from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/10282.jpg"
import filter3 from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/10281.jpg"



export default function Filters(){
    const[filterTab, setFilterTab]= useState(1);
    
    const[houses, setHouses]= useState(homeData)

    const elementRef = useRef();

    const filterHome= [{
        "id":1,
        "img":filter1,
        "title":"Mansion",
        "homes": houses
    },
    {
        "id":2,
        "img":filter2,
        "title":"Mansion",
        "homes":[{}]
    },
    {
        "id":3,
        "img":filter3,
        "title":"Mansion",
        "homes":[{}]
    },
    {
        "id":4,
        "img":filter3,
        "title":"Mansion",
        "homes":[{}]
    },
    {
        "id":5,
        "img":filter3,
        "title":"Mansion",
        "homes":[{}]
    },
    {
        "id":6,
        "img":filter3,
        "title":"Mansion",
        "homes":[{}]
    },
    {
        "id":7,
        "img":filter3,
        "title":"Mansion",
        "homes":[{}]
    },
    {
        "id":8,
        "img":filter3,
        "title":"Mansion",
        "homes":[{}]
    },
    {
        "id":9,
        "img":filter3,
        "title":"Mansion",
        "homes":[{}]
    },
    {
        "id":10,
        "img":filter3,
        "title":"Mansion",
        "homes":[{}]
    },
    {
        "id":11,
        "img":filter3,
        "title":"Mansion",
        "homes":[{}]
    },
    {
        "id":12,
        "img":filter3,
        "title":"Mansion",
        "homes":[{}]
    },
    {
        "id":13,
        "img":filter3,
        "title":"Mansion",
        "homes":[{}]
    },
    {
        "id":14,
        "img":filter3,
        "title":"Mansion",
        "homes":[{}]
    },
    {
        "id":15,
        "img":filter3,
        "title":"Mansion",
        "homes":[{}]
    },  {
        "id":16,
        "img":filter3,
        "title":"Mansion",
        "homes":[{}]
    },
   ]
const handleClick= (e)=>{
    console.log(e.target.id)
return setFilterTab(e.target.id)



}
    const filterTabMap= filterHome.map((tab,i)=>{
       

        return (<div className="filter-img-div-main">
           
            <div   className="filter-img-div"><img className="filter-house-img" src={tab.img} id= {tab.id} key={i} disabled={filterTab=== `${tab.id}`} onClick={handleClick}></img></div>
           <div><p className="filter-img-title">{tab.title}</p></div>
        
            </div>
      )
    })

    const homesTab= filterHome.map((tab,i)=>{
        const houseMap= tab.homes.map((homes)=>{
            return(
                <div className="homes-main-div">
            <div className="home-imgg-div" >
                <img src={homes.img} alt="home" className="home-imgg" />
                <img className="heart-black" src={homes.heartBlack}></img>
            </div>
            <div className="star-name-rating-div-main">
                <div>
                <p className="home-name-p">{homes.Country}</p>
                </div>

                <div className="star-rating-div">
                    <img className="star" src={homes.star}></img>
                    <p>{homes.rating}</p>
                </div>
               
                </div>
            <div><p>{homes.Date}</p></div>
            <div><p> {homes.Price}</p></div>
        </div>
            )
        })

        return(
            <div key={i}> {filterTab === `${tab.id}` && <div className="house-map-div">{houseMap}</div> }</div>
        )
    })

    function leftScroll() {
        const divElement = elementRef.current;
        divElement.scrollBy(400, 0);
        console.log(divElement)
      }

      function rightScroll() {
        const divElement = elementRef.current;
        console.log(divElement)
        divElement.scrollBy(-400, 0);
      }

    return (
        <div className="home-divvv">
             <div className="button-div-scroll"><div className="btn-scroll-div"><button className="btn-scroll" onClick={rightScroll}>{"<"}</button></div><div className="btn-scroll-div"><button className="btn-scroll" onClick={leftScroll}>{">"}</button></div></div>
            <div ref={elementRef} className="home-divv">
            {filterTabMap}
            </div>
   
            <div>
                {homesTab}
            </div>
        </div>
    )
} 