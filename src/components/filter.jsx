import React, { useState, useRef } from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { filterHome } from "./filterhome";

export default function Filters() {
  const [filterTab, setFilterTab] = useState(1);
  const [heartTab, setheartTab] = useState(1);
  const [hoverIndicator, setHoverIndicator] = useState(1);
  const [favOn, setFavOn] = useState(false);
  const [indicators, setIndicators] = useState(false);
  const elementRef = useRef();

  const handleClick = (e) => {
    console.log("handleclick",typeof e.target.id);
    return setFilterTab(e.target.id);
  };
  const filterTabMap = filterHome.map((tab, i) => {
    
    return (
      <div className="filter-img-div-main">
        <div className="filter-img-div" >
          <img
            className="filter-house-img"
            src={tab.img}
            id={tab.id}
            key={i}
            disabled={filterTab === `${tab.id}`}
            onClick={handleClick}
          ></img>
        </div>
        <div>
          <p className="filter-img-title">{tab.title}</p>
        </div>
      </div>
    );
  });

  const homesTab = filterHome.map((tab, i) => {
    function onHover(e) {
      console.log("Yes working hover");
      setHoverIndicator(e.target.id);
      setIndicators((prev) => (prev = true));
    }
    

    function toggle(e) {
      setheartTab(e.target.id);
      setFavOn((prev) => {
        return !prev;
      });
      // console.log(favOn)
    }

    // function offHover() {
    //   console.log("Off");
    // }
// debugger 
    const houseMap = tab.homes.map((homes, i) => {
      const obj = homes.img;
      for (const property in obj) {
        // console.log(`${property}:${obj[property]}`,"homm")

        // console.log(obj,"homes")
        return (
          <div className="homes-main-div">
            <div className="home-imgg-div" key={i}>
              {/* <img src={homes.img} alt="home" className="home-imgg" /> */}
              <CCarousel
                interval="false"
                controls={
                  hoverIndicator === `${homes.id}` && indicators === true
                    ? true
                    : false
                }
                indicators
              >
                <CCarouselItem>
                  <CImage
                    id={homes.id}
                    onMouseOver={onHover}
                    className="d-block w-100"
                    src={homes.img.houseOne}
                    alt="slide 1"
                  />
                </CCarouselItem>
                <CCarouselItem>
                  <CImage
                    id={homes.id}
                    onMouseOver={onHover}
                    className="d-block w-100"
                    src={homes.img.houseTwo}
                    alt="slide 2"
                  />
                </CCarouselItem>
                <CCarouselItem>
                  <CImage
                    id={homes.id}
                    onMouseOver={onHover}
                    className="d-block w-100"
                    src={homes.img.houseThree}
                    alt="slide 3"
                  />
                </CCarouselItem>
                <CCarouselItem>
                  <CImage
                    id={homes.id}
                    onMouseOver={onHover}
                    className="d-block w-100"
                    src={homes.img.houseFour}
                    alt="slide 3"
                  />
                </CCarouselItem>
                <CCarouselItem>
                  <CImage
                    id={homes.id}
                    onMouseOver={onHover}
                    className="d-block w-100"
                    src={homes.img.houseFive}
                    alt="slide 3"
                  />
                </CCarouselItem>
              </CCarousel>
              <img
                className="heart-black"
                onClick={toggle}
                id={homes.id}
                src={
                  heartTab === `${homes.id}` && favOn
                    ? homes.heartRed
                    : homes.heartBlack
                }
              ></img>
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
            <div>
              <p>{homes.Date}</p>
            </div>
            <div>
              <p> {homes.Price}</p>
            </div>
          </div>
        );
      }
    });

    return (
      <div key={i}>
        {" "}
        {filterTab == `${tab.id}` && (
          <div className="house-map-div">{houseMap}</div>
        )}
      </div>
    );
  });

  function leftScroll() {
    const divElement = elementRef.current;
    divElement.scrollBy(400, 0);
    console.log(divElement);
  }

  function rightScroll() {
    const divElement = elementRef.current;
    console.log(divElement);
    divElement.scrollBy(-400, 0);
  }

  return (
    <div className="home-divvv">
      <div className="button-div-scroll">
        <div className="btn-scroll-div">
          <button className="btn-scroll" onClick={rightScroll}>
            {"<"}
          </button>
        </div>
        <div className="btn-scroll-div">
          <button className="btn-scroll" onClick={leftScroll}>
            {">"}
          </button>
        </div>
      </div>
      <div ref={elementRef} className="home-divv">
        {filterTabMap}
      </div>

      <div>{homesTab}</div>
    </div>
  );
}
