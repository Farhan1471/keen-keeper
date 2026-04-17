import React, { useContext, useState } from "react";
import { CalledFriendContext } from "../../context/CalledFriendContext";
import { FcCallback } from "react-icons/fc";
import { MdOutlineTextsms } from "react-icons/md";
import { FcVideoCall } from "react-icons/fc";
import { ImCross } from "react-icons/im";

const Timeline = () =>{

    const { calledFriend } = useContext(CalledFriendContext);
    const [ selectedFilter, setSelectedFilter ] = useState("");

    const actionIcons = {
        "Call": <FcCallback />,
        "Text": <MdOutlineTextsms />,
        "Video": <FcVideoCall />
    }

    const filteredFriends = calledFriend.filter(
        friend => selectedFilter === "" || friend.actionType === selectedFilter
    );

    return(
        calledFriend.length === 0 ? (
            <div className="min-h-[60vh] flex flex-col justify-center items-center">
                <div className="text-6xl text-center my-5"><ImCross /></div>
                <h2 className="font-bold text-4xl text-center my-5">No Interactions!</h2>
                <p className="text-center text-md">You haven't had any interactions yet.</p>
            </div>
        ) : (
            <div className="max-w-7xl mx-auto mt-6">
                <h3 className="font-bold text-5xl mb-2 sm:text-left text-center">Timeline</h3>

                <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="select w-full max-w-xs mt-4 mx-2">
                    <option value="">All</option>
                    <option value="Call">Call</option>
                    <option value="Text">Text</option>
                    <option value="Video">Video</option>
                </select>
                {filteredFriends.map((friend, index) => (
                    <div key={index} className="card w-full bg-base-100 mt-4 sm:mx-2 border-2 border-[#E9E9E9] p-4">
                        <div className="flex items-center gap-4">
                            <p className="text-2xl">{actionIcons[friend.actionType]}</p>
                            <div>
                                <p><b>{friend.actionType}</b> with {friend.name}</p>
                                <p>{new Date().toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    )
}

export default Timeline;