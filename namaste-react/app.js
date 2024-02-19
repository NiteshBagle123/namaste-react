import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
    "div", 
    { id: "parent" }, 
    [
        React.createElement(
            "div", 
            { id: "children1" },
            [
                React.createElement("h1" , { id: "heading", key: "1" }, "Hello World1!!!"),
                React.createElement("h2" , { id: "heading1", key: "2" }, "Hello World2!!!")
            ]
        ),
        React.createElement(
            "div",
            { id: "children2" },
            [
                React.createElement("h1" , { id: "heading2", key: "11" }, "Hello World1!!!"),
                React.createElement("h2" , { id: "heading3", key: "22" }, "Hello World2!!!")
            ]
        )
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);