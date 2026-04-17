import React, {useEffect, useState} from "react";

const useFriendsData = () => {

        const [friends, showFriends] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const fetchData = async () => {
                const res = await fetch("/data.json");
                const data = await res.json();
                console.log(data);
                // setLoading(false);
                
                setTimeout(() => {
                    showFriends(data);
                    setLoading(false);
                },2000)
            };
            fetchData();
        }, [])


    return {friends, loading}
}

export default useFriendsData;