import skiing from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/skiing.png"
import lakefront from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/lakefront.png"
import cabins from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/cabins.png"
import earthhomes from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/earthhomes.png"
import play from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/play.png"
import amazingviews from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/amazingviews.png"
import mansions from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/mansions.png"
import omg from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/omg.png"
import tinyhomes from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/tinyhomes.png"
import luxe from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/luxe.png"
import islands from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/islands.png"
import countryside from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/countryside.png"
import privaterooms from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/privaterooms.png"
import tropical from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/tropical.png"
import trending from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/trending.png"
import castles from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/castles.png"
import amazingpools from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/amazingpools.png"
import domes from "../Holiday_Homes_Apartment_Rentals_-_Airbnb_-_Airbnb/domes.png"

import { homeData } from "./houses/homeData"
import { lakeFront } from "./houses/lakefront"
import { cabin } from "./houses/cabin"
import { earthHomes } from "./houses/earthHomes"
import { plays } from "./houses/play"
import { amazingViews } from "./houses/amazingViews"
import { mansion } from "./houses/mansion"
import { omgs } from "./houses/omg"
import { tinyHome } from "./houses/tinyHome"
import { luxes } from "./houses/luxe"
import { dome } from "./houses/domes"
import { countrySide } from "./houses/countrySide"
import { tropicals } from "./houses/tropical"

const houses= homeData
export const filterHome= [{
    "id":1,
    "img":skiing,
    "title":"Skiing",
    "homes": houses
},
{
    "id":2,
    "img":lakefront,
    "title":"Lakefront",
    "homes":lakeFront
},
{
    "id":3,
    "img":cabins,
    "title":"Cabins",
    "homes":cabin
},
{
    "id":4,
    "img":earthhomes,
    "title":"Earth homes",
    "homes":earthHomes
},
{
    "id":5,
    "img":play,
    "title":"Play",
    "homes":plays
},
{
    "id":6,
    "img":amazingviews,
    "title":"Amazing views",
    "homes":amazingViews
},
{
    "id":7,
    "img":mansions,
    "title":"Mansions",
    "homes":mansion
},
{
    "id":8,
    "img":omg,
    "title":"Omg!",
    "homes":omgs
},
{
    "id":9,
    "img":tinyhomes,
    "title":"Tiny homes",
    "homes":tinyHome
},
{
    "id":10,
    "img":luxe,
    "title":"Luxe",
    "homes":luxes
},
{
    "id":11,
    "img":domes,
    "title":"Domes",
    "homes":dome
},
{
    "id":12,
    "img":countryside,
    "title":"Countryside",
    "homes":countrySide
},
{
    "id":13,
    "img":tropical,
    "title":"Tropical",
    "homes":tropicals
},
{
    "id":14,
    "img":trending,
    "title":"Trending",
    "homes":[{}]
},
{
    "id":15,
    "img":castles,
    "title":"Castles",
    "homes":[{}]
},  {
    "id":16,
    "img":privaterooms,
    "title":"Privare rooms",
    "homes":[{}]
},
{
    "id":17,
    "img":islands,
    "title":"Islands",
    "homes":[{}]
},
{
    "id":18,
    "img": amazingpools,
    "title":"Amazing pools",
    "homes":houses
},
]