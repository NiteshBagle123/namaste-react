import { CDN_IMG_URL } from '../utils/constant';

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = ({ resName, foodName, rating, eta, imgId }) => {
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
            <img
                className="rounded-lg"
                alt="restaurant-logo" 
                src={`${CDN_IMG_URL}${imgId}`}
            />
            <h3 className='font-bold py-4 text-lg'>{resName}</h3>
            <h4>{foodName}</h4>
            <h4>{rating} stars</h4>
            <h4>{eta}</h4>
        </div>
    )
}

export const withLabelPromoted = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className='absolute bg-black text-white mx-4 p-2 rounded-lg'>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
};

export default RestaurantCard;