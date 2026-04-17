import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import useFriendsData from "../../hooks/useFriendsData";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { CalledFriendContext } from "../../context/CalledFriendContext";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";


const FriendDetails = () => {

    const {id} = useParams();
    const {friends, loading} = useFriendsData();

    const expectedFriend = friends.find((friend) => String(friend.id) === id);

    const statusColors = {
        "Overdue": "#EF4444",
        "Almost Due": "#EFAD44",
        "On-Track": "#244D3F"
    };

    const { calledFriend, setCalledFriend } = useContext(CalledFriendContext);


    if (loading || !expectedFriend) {
        return <div className="flex justify-center items-center mt-4"><HashLoader color="#244D3F"/></div>;
    }

    const handleActionButton = (actionType) => {
        setCalledFriend([...calledFriend, {...expectedFriend, actionType}])
        toast.success(`${actionType} with ${expectedFriend.name}!`)
    }
    console.log(calledFriend, "calledFriend");


    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {/* photo card */}
                <div className="card w-full bg-base-100 border-2 border-[#E9E9E9]">
                    <div className="card-body text-center">
                        <img src={expectedFriend?.picture} alt="" className="w-16 rounded-full mx-auto" />

                        <p className="font-semibold text-lg">{expectedFriend?.name}</p>

                        <div className="badge mx-auto text-xs rounded-full text-white" style={{backgroundColor: statusColors[expectedFriend?.status]}}>{expectedFriend?.status}</div>

                        <div className="flex flex-wrap justify-center gap-1">
                            {expectedFriend?.tags?.map((tag, index) => (
                                <div key={index} className="bg-[#CBFADB] rounded-full px-2 py-1 uppercase text-xs">{tag}</div>
                            ))}
                        </div>
                        
                        <p><i className="text-[#64748B] font-semibold text-xs">''{expectedFriend?.bio}''</i></p>
                        <p className="text-[#64748B]">{expectedFriend?.email}</p>
                    </div>
                </div>

                <div className="lg:col-span-3 space-y-4">
                    {/* Right Top-1 */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="card w-full bg-base-100 border-2 border-[#E9E9E9] p-2">
                            <div className="card-body text-center">
                                <p className="font-semibold text-3xl">{expectedFriend?.days_since_contact}</p>
                                <p className="text-[#64748B]">Days Since Contact</p>
                            </div>
                        </div>

                        <div className="card w-full bg-base-100 border-2 border-[#E9E9E9] p-2">
                            <div className="card-body text-center">
                                <p className="font-semibold text-3xl">{expectedFriend?.goal}</p>
                                <p className="text-[#64748B]">Goal (Days)</p>
                            </div>
                        </div>

                        <div className="card w-full bg-base-100 border-2 border-[#E9E9E9] p-2">
                            <div className="card-body text-center">
                                <p className="font-semibold text-3xl">{expectedFriend?.next_due_date}</p>
                                <p className="text-[#64748B]">Next Due</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Bottom */}
                    <div className="card w-full bg-base-100 border-2 border-[#E9E9E9] p-8">
                            <div className="flex justify-between">
                                <p className="text-[#244D3F] font-medium">Relationship Goal</p>
                                <button className="btn">Edit</button>
                            </div>
                            <p className="text-[#64748B]">Contact every <span className="font-semibold text-black">{expectedFriend?.goal} days</span></p>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                    {/* Snooze */}
                    <button className="card w-full h-8 bg-base-100 mt-2 border-2 border-[#E9E9E9] cursor-pointer">
                        <div className="flex items-center justify-center gap-1 py-0.5">
                            <RiNotificationSnoozeLine />
                            <p className="text-center">Snooze 2 Weeks</p>
                        </div>    
                    </button>

                    {/* Archive */}
                    <button className="card w-full bg-base-100 mt-2 border-2 border-[#E9E9E9] cursor-pointer">
                        <div className="flex items-center justify-center gap-1 py-0.5">
                            <FiArchive />
                            <p className="text-center">Archive</p>
                        </div>     
                    </button>

                    {/* Delete */}
                    <button className="card w-full bg-base-100 mt-2 border-2 border-[#E9E9E9] cursor-pointer">
                        <div className="flex items-center justify-center gap-1 py-0.5 text-[#EF4444]">
                            <RiDeleteBinLine />
                            <p className="text-center">Delete</p>
                        </div>         
                    </button>
                </div>

                
                <div className="card w-full bg-base-100 mt-2 border-2 border-[#E9E9E9] p-4 lg:col-span-3 ">
                        <p>Quick Check-In</p>
                        <div className="flex justify-between mt-2">
                            <button onClick={() => handleActionButton('Call')} type="button" className="bg-[#F8FAFC] cursor-pointer hover:bg-gray-200 border-2 border-[#E9E9E9] w-[30%] py-1.5 flex flex-col items-center gap-1 rounded-lg">
                                <FiPhoneCall />
                                <p>Call</p>
                            </button>
                            <button onClick={() => handleActionButton('Text')} type="button" className="bg-[#F8FAFC] cursor-pointer hover:bg-gray-200 border-2 border-[#E9E9E9] w-[30%] py-1.5 flex flex-col items-center gap-1 rounded-lg">
                                <MdOutlineTextsms />
                                <p>Text</p>
                            </button>
                            <button onClick={() => handleActionButton('Video')} type="button" className="bg-[#F8FAFC] cursor-pointer hover:bg-gray-200 border-2 border-[#E9E9E9] w-[30%] py-1.5 flex flex-col items-center gap-1 rounded-lg">
                                <IoVideocamOutline />
                                <p>Video</p>
                            </button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default FriendDetails;