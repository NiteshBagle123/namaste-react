import { CDN_URL } from "../../utils/constants";

export default RestaurantCard = (props) => {
    const { name, cuisines, rating, eta } = props?.restaurant;
    return (
        <div className="res-card" style={{
            backgroundColor: "#f0f0f0"
        }}>
            <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL}
            />
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{rating}</h4>
            <h4>{eta}</h4>
        </div>
    );
}