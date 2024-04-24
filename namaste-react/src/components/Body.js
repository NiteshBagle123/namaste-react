import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
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
            imgId: card.info.cloudinaryImageId
        }));
        setRestaurantList(responseJSON);
        setFilteredRestaurant(responseJSON);
    }

    if(!restaurantList.length) {
        return <Shimmer />;
    }
    return (
        <div className="body">
            <div className='filter'>
                <input type='text' className='search-box' value={searchText} onChange={(event) => {
                    setSearchText(event.target.value);
                }}/>
                <button onClick={() => {
                    setFilteredRestaurant(restaurantList.filter(resDetail => resDetail.resName.toLowerCase().includes(searchText)))
                }}>Search</button>
                <button onClick={() => setRestaurantList(restaurantList.filter(res => res.rating >= 4.0))} className='filter-btn'>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {restaurantList.map(res => <RestaurantCard {...res}/>)}
            </div>
        </div>
    );
}