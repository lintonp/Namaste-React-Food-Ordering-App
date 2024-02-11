import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteError } from "react-router-dom";
import { resolveError } from "../Store/ErrorSlice";

const Error = () => {
  // const err = useRouteError();
  const errorMessage = useSelector((state) => state.error.errorMessage);
  const errorDescription = useSelector((state) => state.error.errorDescription);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resolveError());
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md min-w-fit -mt-36">
        <h1 className="text-3xl font-serif font-bold text-red-500 mb-4">
          Oops! Something went wrong.
        </h1>
        <p className="text-xl text-gray-800 font-serif italic">
          {errorMessage}
        </p>
        {errorDescription && (
          <p className="text-lg mt-2 text-gray-800 font-serif italic">
            {errorDescription}
          </p>
        )}
        <p className="text-lg mt-2 text-gray-800 font-serif italic">
          Please try again later.
        </p>
      </div>
    </div>
  );
};

export default Error;
