import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        
        
    }
    render () {
        return (
            <div>
                <h1>About component</h1>
                <UserClass name={"Nitesh Bagle"} location={"Pune"}/>
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About component</h1>
//             <User name={"Nitesh Bagle"}/>
//             <UserClass name={"Nitesh Bagle"} location={"Pune"}/>
//         </div>
//     )
// }

export default About;