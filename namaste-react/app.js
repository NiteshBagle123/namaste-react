import React from "react";
import ReactDOM from "react-dom";

// const heading = React.createElement(
//     "div", 
//     { id: "parent" }, 
//     [
//         React.createElement(
//             "div",
//             { id: "child", key: "div1" },
//             [
//                 React.createElement(
//                     "h1",
//                     { id: "heading", key: "div1-h1" }, 
//                     "Hello World from div1-h1"
//                 ),
//                 React.createElement(
//                     "h2",
//                     { id: "heading", key: "div1-h2" }, 
//                     "Hello World from React again div1-h2"
//                 )
//             ]
//         ),
//         React.createElement(
//             "div",
//             { id: "child", key: "div2" },
//             [
//                 React.createElement(
//                     "h1",
//                     { id: "heading", key: "div2-h1" }, 
//                     "Hello World from React div2-h1"
//                 ),
//                 React.createElement(
//                     "h2",
//                     { id: "heading", key: "div2-h2" }, 
//                     "Hello World from React again div2-h2"
//                 )
//             ]
//         )
// ]
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// React Element (Javascript object) ==> HTML which browser understand

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo"
                    src="https://thumbs.dreamstime.com/z/print-food-logo-food-delivery-logo-vector-180672311.jpg"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const styleCard = {
    backgroundColor: "#f0f0f0"
}
const RestaurantCard = () => {
    return (
        <div className="res-card" style={styleCard}>
            <img 
                className="res-logo"
                alt="restaurant-logo" 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/0bcf33bed73313bdb98bdf914a3578e1"
            />
            <h3>Meghna Foods</h3>
            <h4>Dal Makhani</h4>
            <h4>4.1 Stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    );
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
