import React, { useContext } from "react";
import { CalledFriendContext } from "../../context/CalledFriendContext";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";

const Timeline = () =>{

    const { calledFriend, setCalledFriend, actionType } = useContext(CalledFriendContext);
    console.log(calledFriend, "calledFriend in timeline");

    const actionIcons = {
        "Call": <FiPhoneCall />,
        "Text": <MdOutlineTextsms />,
        "Video": <IoVideocamOutline />
    }

    return(
        calledFriend.length === 0 ? (
        <h2 className="font-bold text-4xl text-center my-5">
          No Interactions!
        </h2>
        ) : (
            <div className="max-w-7xl mx-auto mt-6">
                <h3 className="font-bold text-5xl mb-2">Timeline</h3>

                <select defaultValue="Pick a Runtime" className="select w-full max-w-xs mt-4">
                    <option disabled={true}>Filter Action</option>
                    <option>Call</option>
                    <option>Text</option>
                    <option>Video</option>
                </select>
                {calledFriend.map((friend, index) => (
                    <div key={index} className="card w-full bg-base-100 mt-4 border-2 border-[#E9E9E9] p-4">
                        <div className="flex items-center gap-4">
                            <p>{actionIcons[friend.actionType]}</p>
                            <div>
                                <p>{friend.actionType} with {friend.name}</p>
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