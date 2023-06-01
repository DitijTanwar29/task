import React from "react";
import r1 from "../asset/r1.jpg"
import r2 from "../asset/r2.jpg"
import r3 from "../asset/r3.jpg"
import r4 from "../asset/r4.jpg"

const Varieties = () => {
    return ( 
        <div className="w-full lg:h-[500px] mx-auto bowls relative flex flex-row justify-center items-center  ">
            
            <div className="text-white text-3xl font-medium mx-auto absolute  lg:max-w-[900px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
                 voluptate culpa consequuntur molestias inventore aut enim dolores tempore quasi at? Lorem ipsum dolor sit, amet consectetur 
                 adipisicing elit. Possimus velit quod repellat, nobis alias Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatibus sequi, omnis quae dolorem nihil. fuga quaerat quidem impedit similique laudantium!
            </div>
            
            <div className="flex flex-row gap-20  translate-y-60 lg:max-w[900px] font-md mx-auto">

                <figure >
                    <figcaption className="text-white capitalize">Basmati</figcaption>
                    <img src={r1}  className="w-[100px] h-[100px] rounded-full  "/>
                </figure>
                <figure >
                    <figcaption className="text-white capitalize">RiceBerry</figcaption>
                    <img src={r3}  className="w-[100px] h-[100px] rounded-full  "/>
                </figure>
                <figure >
                    <figcaption className="text-white capitalize">Brown</figcaption>
                    <img src={r2}  className="w-[100px] h-[100px] rounded-full  "/>
                </figure>
                <figure >
                    <figcaption className="text-white capitalize ">white thai</figcaption>
                    <img src={r4}  className="w-[100px] h-[100px] rounded-full  "/>
                </figure>
            </div>
           
        </div>
    )
}

export default Varieties;