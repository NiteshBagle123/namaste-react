import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
    "div", 
    { id: "parent" }, 
    [
        React.createElement(
            "div",
            { id: "child", key: "div1" },
            [
                React.createElement(
                    "h1",
                    { id: "heading", key: "div1-h1" }, 
                    "Hello World from div1-h1"
                ),
                React.createElement(
                    "h2",
                    { id: "heading", key: "div1-h2" }, 
                    "Hello World from React again div1-h2"
                )
            ]
        ),
        React.createElement(
            "div",
            { id: "child", key: "div2" },
            [
                React.createElement(
                    "h1",
                    { id: "heading", key: "div2-h1" }, 
                    "Hello World from React div2-h1"
                ),
                React.createElement(
                    "h2",
                    { id: "heading", key: "div2-h2" }, 
                    "Hello World from React again div2-h2"
                )
            ]
        )
]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// React Element (Javascript object) ==> HTML which browser understand