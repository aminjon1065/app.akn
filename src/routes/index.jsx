import React from "react";
import { Routes, Route } from "react-router-dom";
import MainView from "../views";
import SignIn from "../views/Auth/SignIn";
import NotFound from "../views/NotFound";
import Dashboard from "../views/Dashboard";

const MainRoutes = () => {
  return (
    <>
      <div className="bg-bg vh-100">
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default MainRoutes;
