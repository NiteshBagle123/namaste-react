import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppLayout />);



