import React from "react"
import logo from "../asset/RSA-logo.svg"
import {BsTelephone} from "react-icons/bs"
import {TfiEmail} from "react-icons/tfi"
import {AiOutlineRight} from "react-icons/ai"
import fb from "../asset/fb.svg"
import ig from "../asset/ig.jpg"
import tw from "../asset/tw.png"



const Footer = () => {
    return(
        <div className="w-full h-40 flex flex-row bg-richblack-25 justify-evenly  mt-12 mb-12 items-center text-yellow-700 font-mono">

            <div className="flex flex-col">

                <img src={logo} className="h-20 w-20"/>
                <p>RSA Pvt Ltd</p>
                Lorem ipsum dolor sit amet.
                Lorem, ipsum.
                lorem
                <div className="flex flex-row gap-3 items-center">
                    <BsTelephone/> 
                    <div> <span className="font-bold">Phone:</span> +60 746884848836</div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                    <TfiEmail/> 
                    <div> <span className="font-bold">Email:</span> abcd123@yahoo.in</div>
                </div>

            </div>

            <div className="flex flex-col ">

                <div className="flex flex-row gap-3 items-center">
                    <AiOutlineRight/>
                    <div className="font-bold">HOME</div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                    <AiOutlineRight/>
                    <div className="font-bold">ABOUT US</div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                    <AiOutlineRight/>
                    <div className="font-bold">OUR ACTIVITIES</div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                    <AiOutlineRight/>
                    <div className="font-bold">GALLERY</div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                    <AiOutlineRight/>
                    <div className="font-bold">CANTACT</div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                    <AiOutlineRight/>
                    <div className="font-bold">OUR ORGANIZATIONS</div>
                </div>
                
            
            </div>

            <div className="flex flex-col items-center justify-between">
                <div className=" text-yellow-700 font-mono text-2xl font-extralight italic">Stay Connected</div>
                <div className="flex flex-row items-center gap-5">
                    <img src={fb} className="w-16 h-16"/>
                    <img src={ig} className="w-12 h-12 "/>
                    <img src={tw} className="w-[50px] h-[50px]"/>
                </div>
            </div>


        </div>
        
    )
}

export default Footer;