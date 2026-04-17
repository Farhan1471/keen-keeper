import React from "react";

const SummaryCard = ({totalFriends = 0, onTrack = 0, needAttention = 0, interactionsThisMonth = 0}) => {
    return(
        <div className="mt-15 flex flex-wrap gap-6 justify-center items-center">
            <div className="card w-52 bg-base-100 shadow-md">
                <div className="card-body text-center">
                    <h2 className="text-[#244D3F] text-3xl font-semibold">{totalFriends}</h2>
                    <p className="text-[#64748B]">Total Friends</p>
                </div>
            </div>
            <div className="card w-52 bg-base-100 shadow-md">
                <div className="card-body text-center">
                    <h2 className="text-[#244D3F] text-3xl font-semibold">{onTrack}</h2>
                    <p className="text-[#64748B]">On Track</p>
                </div>
            </div>
            <div className="card w-52 bg-base-100 shadow-md">
                <div className="card-body text-center">
                    <h2 className="text-[#244D3F] text-3xl font-semibold">{needAttention}</h2>
                    <p className="text-[#64748B]">Need Attention</p>
                </div>
            </div>
            <div className="card w-52 bg-base-100 shadow-md">
                <div className="card-body text-center">
                    <h2 className="text-[#244D3F] text-3xl font-semibold">{interactionsThisMonth}</h2>
                    <p className="text-[#64748B]">Interactions This Month</p>
                </div>
            </div>
        </div>
    )
}

export default SummaryCard;