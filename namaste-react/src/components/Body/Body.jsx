import RestaurantCard from "../RestaurantCard/RestaurantCard";

import { RESPONSE_DATA } from "../../utils/constants";

export default Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {RESPONSE_DATA.map((restaurant, index) => <RestaurantCard key={index} restaurant={restaurant}/>)}
            </div>
        </div>
    )
}