import { Component } from "react";

class UserClassChild extends Component{
    constructor(props){
        super(props);
        console.log(this.props.child+" constructor");
    }
    componentDidMount(){
        console.log(this.props.child+" componentDidMount");
    }
    render(){
        console.log(this.props.child+" render");
        return <h4>{this.props.child}</h4>;
    }
}

export default UserClassChild;