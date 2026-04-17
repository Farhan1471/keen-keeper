import React from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { CalledFriendContext } from "../../context/CalledFriendContext";

const Stats = () =>{

    const { calledFriend } = React.useContext(CalledFriendContext);

    const data =[
        { name: "Text", value: calledFriend.filter(friend => friend.actionType === "Text").length, fill: "#7F37F5" },
        { name: "Call", value: calledFriend.filter(friend => friend.actionType === "Call").length, fill: "#244D3F" },
        { name: "Video", value: calledFriend.filter(friend => friend.actionType === "Video").length, fill: "#37A163" }
    ]

    return(
        <div className="max-w-7xl mx-auto mt-6">
            <h3 className="font-bold text-4xl sm:text-left text-center">Friendship Analytics</h3>
            <div className=" my-5 shadow p-5 rounded-md border border-slate-300 container mx-auto">
                <h2 className="font-semibold mb-8 text-center">By Interaction Type</h2>
                <PieChart
                    style={{
                    width: "100%",
                    maxWidth: "500px",
                    maxHeight: "50vh",
                    margin: "auto",
                    aspectRatio: 1,
                    }}
                    responsive
                >
                    <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    cornerRadius="50%"
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                    />
                    <Legend />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    )
}

export default Stats;