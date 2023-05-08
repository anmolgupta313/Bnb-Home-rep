// import { homeData } from "./homeData";

export default function Houses(props){

    return(
        <div className="homes-main-div">
            <div className="home-imgg-div" >
                <img src={props.home.img} alt="home" className="home-imgg" />
            </div>
            <div><p>{props.home.Country}</p></div>
            <div><p>{props.home.Date}</p></div>
            <div><p> {props.home.Price}</p></div>
        </div>
    )
}
