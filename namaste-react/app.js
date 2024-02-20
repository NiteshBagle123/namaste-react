import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// react element is object and when render on dom it becomes html element
// JSX is not html --> It is html like or xml like syntax
// JSX code is transpiled before it reaches to JS engine done by parcel - babel transpiler
// React component --> class based and functional

const App = () => (
    <div>
        <p id="heading">Namaste React App!</p>
    </div>
);

// function App () {
//     return (
//         <div>
//             <p id="heading">Namaste React App!</p>
//         </div> 
//     );
// }

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <p id="heading">Namaste React App!</p>
//             </div>
//         )
//     }
// }

ReactDOM.createRoot(document.getElementById("root")).render(<App />);


