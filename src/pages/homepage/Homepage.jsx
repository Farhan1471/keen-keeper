import React from "react";
import Banner from "../../components/homepage/Banner";
import SummaryCard from "../../components/homepage/SummaryCard";
import FriendsCard from "../../components/homepage/FriendsCard";

const Homepage = () =>{
    return(
        <div>
            <Banner />
            <SummaryCard />
            <hr className="my-12 h-0.5 border-0 bg-[#E9E9E9] mx-52"/>
            <FriendsCard />
        </div>
    )
}

export default Homepage;