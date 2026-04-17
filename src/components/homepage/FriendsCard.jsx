import React, { useEffect, useState } from "react";
import useFriendsData from "../../hooks/useFriendsData";
import { Link } from "react-router";
import { HashLoader } from "react-spinners";

const FriendsCard = () => {

    const {friends, loading} = useFriendsData();

    const statusColors = {
        'Overdue': '#EF4444',
        'Almost Due': '#EFAD44',
        'On-Track': '#244D3F'
    }

    return(
        <div className="max-w-6xl mx-auto px-4">
            <h3 className="font-semibold text-2xl text-center md:text-center lg:text-left lg:ml-28">Your Friends</h3>

            {loading? <div className="flex justify-center items-center"><HashLoader color="#244D3F"/></div> : <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {
                        friends.map((friend, individual) =>{
                            return(
                                <Link to={`/friends/${friend.id}`} className="">
                                    <div className="card w-52 bg-base-100 shadow-md">
                                        <div className="card-body text-center">
                                            <img src={friend.picture} alt="" className="w-24 rounded-full mx-auto" />
                                            <p className="font-semibold text-xl">{friend.name}</p>
                                            <p className="text-[#64748B] text-xs">{friend.days_since_contact}d ago</p>

                                            <div className="flex flex-wrap justify-center gap-1">
                                                {friend.tags.map((tag, index) => (
                                                    <div key={index} className="bg-[#CBFADB] rounded-full px-2 py-1 uppercase text-xs">{tag}</div>
                                                ))}
                                            </div>
                                            
                                            <div className="badge mx-auto rounded-full text-xs text-white" style={{backgroundColor: statusColors[friend.status]}}>{friend.status}</div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>}
        </div>
    )
}

export default FriendsCard;