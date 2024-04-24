import { CDN_IMG_URL } from '../utils/constant';

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = ({ resName, foodName, rating, eta, imgId }) => {
    return (
        <div className="res-card" style={styleCard}>
            <img 
                className="res-logo"
                alt="restaurant-logo" 
                src={`${CDN_IMG_URL}${imgId}`}
            />
            <h3>{resName}</h3>
            <h4>{foodName}</h4>
            <h4>{rating} stars</h4>
            <h4>{eta}</h4>
        </div>
    )
}

export default RestaurantCard;