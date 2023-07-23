import { useState } from "react";

const User = ({name, location}) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);
    return <>
        <h3>Count = {count}</h3>
        <button onClick={()=>{
            setCount(count+1);
        }}>Inc Count</button>
        <h3>Count2 = {count2}</h3>
        <h2>{name}</h2>
        <h3>Location - {location}</h3>
    </>
}

export default User;