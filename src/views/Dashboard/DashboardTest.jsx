import React from "react";
import { useLocation } from "react-router-dom";
import useNotification from "../../hooks/notification";

const DashboardTest = () => {
  const location = useLocation();
  const notificate = useNotification(location.state);

  return (
    <div>
      {notificate}
      Status Test
    </div>
  );
};

export default DashboardTest;
