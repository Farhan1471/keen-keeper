import React, { useEffect, useState } from "react";

const FriendsCard = () => {

    const [friends, showFriends] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/data.json");
            const data = await res.json();
            console.log(data);
            showFriends(data);
        };
        fetchData();
    }, [])

    const statusColors = {
        'Overdue': '#EF4444',
        'Almost Due': '#EFAD44',
        'On-Track': '#244D3F'
    }

    return(
        <div>
            <h3 className="font-semibold text-2xl ml-76">Your Friends</h3>

            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:*:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {
                        friends.map((friend, individual) =>{
                            return(
                                <div className="">
                                    <div className="card w-52 bg-base-100 shadow-md">
                                        <div className="card-body text-center">
                                            <img src={friend.picture} alt="" className="w-24 rounded-full mx-auto" />
                                            <p className="font-semibold text-xl">{friend.name}</p>
                                            <p className="text-[#64748B]">{friend.days_since_contact} d ago</p>

                                            <div className="flex flex-wrap justify-center gap-1">
                                                {friend.tags.map((tag, index) => (
                                                    <div key={index} className="bg-[#CBFADB] rounded-full px-2 py-1 uppercase text-xs">{tag}</div>
                                                ))}
                                            </div>
                                            
                                            <div className="badge mx-auto text-white" style={{backgroundColor: statusColors[friend.status]}}>{friend.status}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FriendsCard;