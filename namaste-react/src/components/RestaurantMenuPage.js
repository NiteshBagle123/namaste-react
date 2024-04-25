import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';

const RestaurantMenuPage = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    const fetchMenu = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.545163&lng=73.9168766&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);
        const jsonData = await data.json();
        console.log(jsonData.data);
        setResInfo(jsonData.data);
    }
    useEffect(() => {
        fetchMenu();
    }, []);

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