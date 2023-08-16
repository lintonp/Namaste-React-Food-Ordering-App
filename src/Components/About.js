import { useContext } from "react";
import UserClass from "./UserClass";
import userContext from "../Utils/useContext";
const About = () => {
  const { loggedinUser, setLoggedinUser } = useContext(userContext);

  return (
    <div className="m-4 p-4">
      <h1>About Us page</h1>
      {/* <User name="Linton" location="Mumbai" /> */}
      <UserClass name="Linton" location="Mumbai" />
      <h4>Default User: {loggedinUser}</h4>

      <div className=" flex m-2 content-center h-8">
        <input
          className="border border-solid border-black m-4 p-4"
          type="text"
          value={loggedinUser}
          onChange={(e) => {
            setLoggedinUser(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default About;
