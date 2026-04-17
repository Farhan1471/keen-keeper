import React from "react";
import { Link } from "react-router";

const NotFoundPage = () =>{
    return(
        <main className="grid min-h-full place-items-cente px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="font-semibold text-[#1F2937]">404</p>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance text-black sm:text-7xl">Page not found</h1>
                <p className="mt-6 text-lg font-medium text-pretty text-black sm:text-xl/8">Sorry, we couldn't find the page you're looking for.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link to={"/"}><button className="btn rounded-md bg-[#244D3F] hover:bg-[#2D765D] text-white">Back to Homepage</button></Link>
                </div>
            </div>
        </main>
    )
}

export default NotFoundPage;