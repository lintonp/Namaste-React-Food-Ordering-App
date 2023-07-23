import React from "react";
import UserClassChild from "./PracticingBatchLec8LetsGetClassy/UserClassChild"

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count2: 2,
        }
        console.log(this.props.name+" constructor");
    }

    componentDidMount(){
        console.log(this.props.name+" componentDidMount");
    }

    render(){
        console.log(this.props.name+" render");
        const {name, location} = this.props;
        const {count} = this.state;
        return <>
            <h3>Count = {count}</h3>
            <button onClick={()=>{
                //NEVER UPDATE STATE VARIABLES DIRECTLY
               this.setState({
                count: this.state.count + 1
               }) 
            }}>Inc Count</button>
            <h2>{name}</h2>
            <h3>Location - {location}</h3>
            <UserClassChild child={name+"Child"}/>
        </>
    }
}

export default UserClass;