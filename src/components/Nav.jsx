import React from "react"
import logo from "../asset/RSA-logo.svg"

const Nav = () => {
    return(
        <div className="w-full lg:h-[50px] flex flex-row justify-evenly items-center">

            <div className="flex flex-col w-[35%]">
                <img src={logo} className="h-10 lg:w-[50px]"/>
                <p className="text-sm text-yellow-500">Authenticity in Every Grain</p>
            </div>

            <div className="w-[50%]">

                <ul className="flex flex-row justify-between items-center text-richblack-800">
                    <li>HOME </li>
                    <li>ABOUT US</li>
                    <li>OUR PRODUCTS</li>
                    <li>Contack</li>
                    <li>Our Organizations</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav