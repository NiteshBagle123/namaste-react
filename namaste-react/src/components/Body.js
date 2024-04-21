import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { resList } from '../utils/mockData';

export default Body = () => {
    const [restaurantList, setRestaurantList] = useState(resList);
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className='filter'>
                <button onClick={() => setRestaurantList(resList.filter(res => res.rating >= 4.0))} className='filter-btn'>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {restaurantList.map(res => <RestaurantCard {...res}/>)}
            </div>
        </div>
    );
}