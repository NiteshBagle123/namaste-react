import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import RestaurantCard, { withLabelPromoted } from './RestaurantCard';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';

const RestaurantCardPromoted = withLabelPromoted(RestaurantCard);

export default Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.545163&lng=73.9168766&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const jsonResponse = await response.json();
        const responseJSON = jsonResponse.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(card => ({
            resName: card.info.name || '',
            foodName: card.info.name || '',
            rating: card.info.avgRatingString || 'NA',
            eta: card.info.sla.deliveryTime || 'NA',
            imgId: card.info.cloudinaryImageId,
            id: card.info.id
        }));
        setRestaurantList(responseJSON);
        setFilteredRestaurant(responseJSON);
    }

    const onlineStatus = useOnlineStatus();
    if(!onlineStatus) {
        return <p>You are offline, please try again</p>
    };
    if(!restaurantList.length) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className='filter flex'>
                <div className='search m-4 p-4'>
                    <input type='text' className='border border-solid-black' value={searchText} onChange={(event) => {
                        setSearchText(event.target.value);
                    }}/>
                </div>
                <button className="px-4 py-2 bg-green-100 m-8 rounded-lg" onClick={() => {
                    setFilteredRestaurant(restaurantList.filter(resDetail => resDetail.resName.toLowerCase().includes(searchText)))
                }}>Search</button>
                <div className='search m-4 p-4 flex items-center'>
                    <button className="px-4 py-2 bg-gray-100 rounded-lg"  onClick={() => setRestaurantList(restaurantList.filter(res => res.rating >= 4.0))}>Top Rated Restaurants</button>
                </div> 
            </div>
            <div className="flex flex-wrap">
                {
                    restaurantList.map(
                        res => <Link to={"/restaurants/"+ res.id}>
                            {res.promoted && <RestaurantCardPromoted {...res} /> || <RestaurantCardPromoted {...res}/>}
                        </Link>
                    )
                }
            </div>
        </div>
    );
}