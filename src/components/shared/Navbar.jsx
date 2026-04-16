import React from "react";
import logoImg from "../../assets/images/logo.png"
import { Link, NavLink } from "react-router"
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";

const Navbar = () =>{
    return(
        <nav className="shadow">
            <div className="flex justify-between items-center gap-4 bg-white py-4 px-4 sm:px-6 lg:px-8 container mx-auto">
                <img src={logoImg} alt="" />
                <ul className="flex justify-between items-center gap-4 text-[#64748B] font-semibold">
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