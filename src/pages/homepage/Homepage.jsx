import React from "react";
import Banner from "../../components/homepage/Banner";
import SummaryCard from "../../components/homepage/SummaryCard";
import FriendsCard from "../../components/homepage/FriendsCard";
import useFriendsData from "../../hooks/useFriendsData";

const Homepage = () =>{

    const {friends, loading} = useFriendsData();

    const totalFriends = friends.length;
    const onTrack = friends.filter((friend) => friend.status === "On-Track").length;
    const needAttention = friends.filter((friend) => friend.status === "Overdue").length;
    const interactionsThisMonth = friends.filter((friend) => friend.days_since_contact <= 30).length;

    return(
        <div>
            <Banner />
            <SummaryCard totalFriends={totalFriends} onTrack={onTrack} needAttention={needAttention} interactionsThisMonth={interactionsThisMonth} />
            <hr className="my-12 h-0.5 border-0 bg-[#E9E9E9] mx-4 md:mx-16 lg:mx-72"/>
            <FriendsCard />
        </div>
    )
}

export default Homepage;