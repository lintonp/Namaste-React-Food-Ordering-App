import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userInfo : {
                name: "Dummy Name",
                location: "Default"
            }
        }
    }

    async componentDidMount(){
        console.log(this.props.name+" componentDidMount");
        const data = await fetch("https://api.github.com/users/lintonp");
        const json = await data.json();
        console.log(json)
        this.setState({
                userInfo: json,
            }) 
    }

    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    render(){
        const {name, location} = this.state.userInfo;
        return <>            
            <h2>{name}</h2>
            <h3>Location - {location?location:"Secret"}</h3>
        </>
    }
}

export default UserClass;