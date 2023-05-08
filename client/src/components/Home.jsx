// For now not of any importance

import React from "react";
import { useLocation, Link} from "react-router-dom";

export const Home = () => {

    const location = useLocation();

    return(
        <>
            {/* <h1>Hello {location.state.id}, welcome!</h1> */}
            <h1>I am Home</h1>
        </>
    )
}