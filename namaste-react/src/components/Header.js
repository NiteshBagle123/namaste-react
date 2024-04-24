import { useEffect, useState } from "react";

export default Header = () => {
    const [btnName, setBtnName] = useState("login");
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
                    <button onClick={() => btnName === 'login' ? setBtnName("logout") : setBtnName("login")} className="login-button">{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

