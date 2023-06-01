import React from "react";
import Nav from "./components/Nav"
import "./App.css";
import { Route } from "react-router-dom"; 
import { Routes } from "react-router-dom";

import Slider from "./components/Slider";
import Varieties from "./components/Varieties";
import GlobalFootprints from "./components/GlobalFootprints";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div >
      <Nav/>
      {/* Section 1 */}
      <div className="w-[100%] h-[300px] relative firstimg">
     
          <div className="flex flex-col ml-10 mt-5 pt-5 ">
            <p className="  text-white capitalize font-extrabold text-8xl"> a world of</p>
            <p className="  text-white italic text-4xl mt-2 font-italic ">Flavours & Textures</p>
            <button className=" text-yellow-700 bg-white w-24 rounded-md mt-5">Explore More</button>
          </div>

      </div>
      {/* Section 2 */}
        <div className="w-[100%] h-[600px] bg-blue-300 
        flex flex-row justify-between ">
     
          <div className="flex flex-col ml-10  w-[50%] mt-8 ">
            <p className="  text-yellow-900 capitalize font-extrabold underline  text-8xl">About us</p>
           
            <p className="  text-white italic text-4xl mt-5 w-[90%] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis praesentium, ducimus amet sed culpa ipsum obcaecati maiores, aperiam laudantium maxime exercitationem sunt animi vitae illum? Placeat dolore obcaecati architecto numquam!
            </p>
            <button className=" text-yellow-700  bg-white w-24 h-[10%] rounded-md mb-0">Explore More</button>
          </div>
          
           <div className=" h-[100%] w-[50%] flex flex-row gap-4 justify-center items-center" >

              <div className="bg-yellow-900 lg:w-[100%] z-10 justify-end h-[65%] rounded-md ">
              <div className="bowl z-30 h-[400px] w-[400px] -translate-x-36 -translate-y-1 rounded-full ">
                  
              </div>
                  
            </div>
          </div>


        </div>

        {/* Section 3 */}
        <Slider/>
        {/* Section 4 */}
        <Varieties/>
        {/* Section 5 */}
        <GlobalFootprints/>
        {/* Footer */}
        <Footer/>


     
  </div>
  )
};

export default App;
