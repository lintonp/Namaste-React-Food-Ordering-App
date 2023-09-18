import { useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setonlineStatus] = useState(true);

  window.addEventListener("offline", (event) => {
    setonlineStatus(false);
  });
  window.addEventListener("online", (event) => {
    setonlineStatus(true);
  });

  return onlineStatus;
};

export default useOnlineStatus;
