import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// react element is object and when render on dom it becomes html element
// JSX is not html --> It is html like or xml like syntax
// JSX code is transpiled before it reaches to JS engine done by parcel - babel transpiler
// React component --> class based and functional

// Header - logo, nav items - home, about, cart
// body - search component, food cards (card container)
// footer - copyright, link, contacts, support details, address 

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo "src="https://image.freepik.com/free-vector/food-app-icon-logo_29069-50.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ({ name, cuisines, rating, eta }) => {
    return (
        <div className="res-card" style={{
            backgroundColor: "#f0f0f0"
        }}>
            <img
                className="res-logo"
                alt="res-logo"
                src="https://www.fusion6.com.au/wp-content/uploads/2022/09/popular-indian-dishes-cuisine.jpg"
            />
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{rating}</h4>
            <h4>{eta}</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard 
                    name="Meghna Foods"
                    cuisines="North Indian, Asian"
                    rating="4.4 Stars"
                    eta="38 minutes"
                />
                <RestaurantCard 
                    name="KFC"
                    cuisines="Chicken Special"
                    rating="4.0 Stars"
                    eta="45 minutes"
                />
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<AppLayout />);



