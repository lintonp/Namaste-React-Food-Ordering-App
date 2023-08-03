import { useContext } from "react";
import userContext from "../Utils/useContext";

const Contact = () => {
  const { loggedinUser } = useContext(userContext);
  return <div>Hey {loggedinUser}, Contact Us</div>;
};

export default Contact;
