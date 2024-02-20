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
            <div className="logo">
                <img src="https://image.freepik.com/free-vector/food-app-icon-logo_29069-50.jpg"/>
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
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
        </div>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<AppLayout />);



