import React from 'react';
import {Routes, Route} from "react-router-dom";
import Inbox from "../../views/Dashboard/Inbox";
import Drafts from "../../views/Dashboard/Drafts";
import NotFound from "../../views/NotFound";
import DashboardTest from "../../views/Dashboard/DashboardTest";

const Index = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<DashboardTest/>}/>
                <Route path={"/inbox"} element={<Inbox/>}/>
                <Route path={"/drafts"} element={<Drafts/>}/>
                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
        </>
    );
};

export default Index;