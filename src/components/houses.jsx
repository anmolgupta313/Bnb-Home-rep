// import { homeData } from "./homeData";

export default function Houses(props){

    return(
        <div className="homes-main-div">
            <div className="home-imgg-div" >
                <img src={homes.img} alt="home" className="home-imgg" />
            </div>
            <div><p>{homes.Country}</p></div>
            <div><p>{homes.Date}</p></div>
            <div><p> {homes.Price}</p></div>
        </div>
    )
}
