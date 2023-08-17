import { useContext } from "react";
import userContext from "../Utils/useContext";

const Contact = () => {
  const { loggedinUser } = useContext(userContext);
  return (
    <div className="m4 p-4">
      <h1>Contact Us</h1>
      <br />
      <p>Hey {loggedinUser}, send you queries below</p>
      <form>
        <input
          className="border border-1 border-black m-4 p-4"
          placeholder="name"
        />
        <input
          className="border border-1 border-black m-4 p-4"
          placeholder="message"
        />
        <button
          onClick={(event) => event.preventDefault()}
          className="border border-2 border-black border-double m-4 p-4 bg-slate-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
