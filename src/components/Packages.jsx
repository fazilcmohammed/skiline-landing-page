import React from "react";
import { packages } from "../assets/constant";
import { FaStar } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { TfiAlarmClock } from "react-icons/tfi";
import { VscBook } from "react-icons/vsc";
import { GiProgression } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";


const Packages = () => {
  return (
    <section >
      <div className="px-28 py-20">
        {/* heading and para */}
        <div>
          <h3 className="text-[18px] text-[#96BB7C] font-semibold">
            Practice Advice
          </h3>
          <h1 className="text-4xl text-[#252B42] font-bold mt-7">
            Affordable Packages
          </h1>
          <p className="text-second_text text-lg my-3">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>

        {/* packages */}
        <div>
          <div className="flex items-center gap-7 my-16">
            {packages.map((pack, index) => (
              <div key={index} className="flex items-center gap-5">
                <img src={pack.img} alt="" className="w-60" />
                <div>
                    <div className="flex items-center gap-5">
                      <h1 className="text-primary font-bold text-[16px]">
                        {pack.subHeading}
                      </h1>
                      <div className="flex items-center bg-text px-2 py-1 rounded-full gap-2">
                        <FaStar className="text-yellow-500 text-sm" />
                        <p className="text-white text-sm">4.9</p>
                      </div>
                    </div>
                    <h1 className="text-[16px] font-bold text-text capitalize my-3">
                      {pack.heading}
                    </h1>
                    <p className="text-[15px] font-normal text-second_text">
                      {pack.desc}
                    </p>
                    <div className="flex gap-2 my-3 items-center text-second_text">
                      <LuDownload />
                      <p className="font-bold">{pack.sales}</p>
                    </div>
                    <div className="flex items-center gap-3 my-3">
                      <p className="font-bold text-[18px] text-[#BDBDBD] ">
                        {pack.mrp}
                      </p>
                      <p className="font-bold text-[18px] text-[#FFAB71] ">
                        {pack.price}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 ">
                      <div className="flex items-center gap-3">
                        <TfiAlarmClock className="text-[#FFAB71]"/>
                        <p className="text-sm font-semibold text-second_text">{pack.duration}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <VscBook className="text-[#FFAB71]"/>
                        <p className="text-sm font-semibold text-second_text">{pack.lessons}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <GiProgression className="text-[#FFAB71]"/>
                        <p className="text-sm font-semibold text-second_text capitalize">{pack.progress}</p>
                      </div>
                    </div>
                    <button className="my-6 flex items-center gap-1 text-[16px] text-primary border-[1px] border-primary px-4 py-2 rounded-full font-bold">Learn More <IoIosArrowForward className="text-xl"/></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-danger w-8 items-center justify-center m-auto h-0.5"></div>
    </section>
  );
};

export default Packages;
