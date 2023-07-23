import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count2: 2,
        }
    }

    render(){
        const {name, location} = this.props;
        const {count} = this.state;
        return <>
            <h3>Count = {count}</h3>
            <button onClick={()=>{
               this.setState({
                count: this.state.count + 1
               }) 
            }}>Inc Count</button>
            <h2>{name}</h2>
            <h3>Location - {location}</h3>
        </>
    }
}

export default UserClass;