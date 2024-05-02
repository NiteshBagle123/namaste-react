import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: '',
                location: ''
            }
        }
    }

    async componentDidMount() {
        const userApi = await fetch('https://api.github.com/users/NiteshBagle123');
        const userApiJSON = await userApi.json();
       
        this.setState({
            userInfo: userApiJSON
        })
    }

    componentDidUpdate() {
        console.log('Update happened')
    }
    render() {
        const { name, location } = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Counter</button>
            </div>
        );
    }
}

export default UserClass;