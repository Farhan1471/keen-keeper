import React from "react";
import { Link } from "react-router";

const NotFoundPage = () =>{
    return(
        <div className="text-center mt-50">
            <h3>404 Not Found</h3>
            <Link to={"/"}><button className="btn">Back to Homepage</button></Link>
        </div>
    )
}

export default NotFoundPage;