import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import img2 from '../assets/images/heroimg2.png'

const LiveAction = () => {
  return (
    <section className="">
      <div className="flex items-center gap-40 px-28 py-20">
        <div>
            <img src={img2} alt="" className="w-[600px]"/>
        </div>
        <div>
          <div className="bg-danger w-16 h-1"></div>
          <h1 className="text-4xl text-[#252B42] font-bold my-7 capitalize">video in live <br /> action</h1>
          <p className="text-second_text text-lg">
            Problems trying to resolve the conflict between <br /> the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <button className="my-6 flex items-center gap-1 text-[16px] text-primary font-bold">
            Learn More <IoIosArrowForward className="text-xl" />
          </button>
        </div>
      </div>
      <div className="bg-danger w-8 items-center justify-center m-auto h-0.5"></div>
    </section>
  );
};

export default LiveAction;
