import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import { ContactUs } from "./components/ContactUs";
import { Error } from "./components/Error";
import RestaurantMenuPage from "./components/RestaurantMenuPage";

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

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contactus',
                element: <ContactUs />
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenuPage />
            }
        ],
        errorElement: <Error />
    }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
