import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () =>{
    return(
        <div className="mt-12">
            <footer className="bg-[#244D3F] text-white text-center">
                <h1 className="text-center text-5xl font-bold pt-8">KeenKeeper</h1>
                <p className="text-xs my-4 mx-2">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className="font-semibold">Social Links</p>

                <div className="flex justify-center items-center gap-2 mt-4">
                    <RiInstagramFill className="bg-white text-black p-1 rounded-full text-2xl" />
                    <AiFillFacebook className="bg-white text-black p-1 rounded-full text-2xl" />
                    <FaXTwitter className="bg-white text-black p-1 rounded-full text-2xl" />
                </div>

                <hr className="bg-[#1A8862]/20 h-0.5 border-0 mx-52 my-4 text-xs"/>

                <div className="text-[#FAFAFA] text-xs flex flex-col sm:flex-row justify-between lg:mx-52 pb-4">
                    <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved</p>

                    <ul className="flex justify-center gap-2">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer;