import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return(
        <div>
            <h1>Error Page</h1>
            <h3>{err.status}</h3>
        </div>
    );
}

export default Error;