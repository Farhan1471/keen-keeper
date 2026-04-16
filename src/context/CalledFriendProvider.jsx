import React, { useState } from "react";
import { CalledFriendContext } from "./CalledFriendContext";

const CalledFriendProvider = ({children}) => {

    const [ calledFriend, setCalledFriend ] = useState([]);

    const data = {
        calledFriend,
        setCalledFriend
    }

    return(
        <CalledFriendContext.Provider value={data}>
            {children}
        </CalledFriendContext.Provider>
    )
}

export default CalledFriendProvider;