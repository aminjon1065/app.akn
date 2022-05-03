import React from 'react';
import {Link} from "react-router-dom";

const MainView = () => {
    return (
        <>
            <Link to={"/sign-in"}>Sign In</Link>
            <br/>
            <Link to={"dashboard"}>Dashboard</Link>
        </>
    );
};

export default MainView;