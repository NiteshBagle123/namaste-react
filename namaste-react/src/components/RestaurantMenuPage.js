import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenuPage = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer />;

    const { name, cuisines, avgRating, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    return (
        <div>
            <h1>{name}</h1>
            <h2>Menu</h2>
            <ul>
                {cuisines.map(cuisine => <li>{cuisine}</li>)}
            </ul>
            <h2>{avgRating} rating</h2>
            <h2>{costForTwoMessage}</h2>
        </div>
    )
}

export default RestaurantMenuPage;