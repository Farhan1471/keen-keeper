import React from "react";
import logoImg from "../../assets/images/logo.png"
import { Link, NavLink } from "react-router"
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";

const Navbar = () =>{
    return(
        <nav className="shadow">
            <div className="flex flex-col items-center gap-3 bg-white py-4 px-4 sm:px-6 lg:px-8 container mx-auto sm:flex-row sm:justify-between">
                <img src={logoImg} alt="KeenKeeper" />
                <ul className="flex justify-center items-center gap-4 text-[#64748B] font-semibold w-full sm:w-auto">
                    <li>
                        <NavLink to={"/"} className={({isActive}) => 
                            isActive ? "flex items-center gap-1 bg-[#244D3F] text-white px-3 py-2 rounded" : "flex items-center gap-1"}>
                            <RiHome2Line /><span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/timeline"} className={({isActive}) => 
                            isActive ? "flex items-center gap-1 bg-[#244D3F] text-white px-3 py-2 rounded" : "flex items-center gap-1"}>
                            <IoTimeOutline /><span>Timeline</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/stats"} className={({isActive}) => 
                            isActive ? "flex items-center gap-1 bg-[#244D3F] text-white px-3 py-2 rounded" : "flex items-center gap-1"}><ImStatsDots /><span>Stats</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;