import React from "react";
import { aboutUs } from "../assets/constant";
import { IoIosArrowForward } from "react-icons/io";

const AboutUs = () => {
  return (
    <section className=" bg-[#FFFFFF] " >
      <div className="flex flex-col md:flex-row  gap-20 px-10 md:px-28 py-20">
        <div>
          <div className="bg-danger w-16 h-1"></div>
          <h1 className="text-4xl text-[#252B42] font-bold my-7">About Us</h1>
          <p className="text-second_text text-lg">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <button className="my-6 flex items-center gap-1 text-[16px] text-primary font-bold">Learn More <IoIosArrowForward className="text-xl"/></button>
        </div>
        <div>
          <div className="flex flex-col md:flex-row gap-8">
            {
              aboutUs.map((about, index) => (
                <div key={index} className="shadow-xl p-7 ">
                  <img src={about.icon} alt="" className="bg-primary p-4 rounded-xl"/>
                  <h1 className="capitalize text-text font-bold mt-5 text-md">{about.title}</h1>
                  <div className="bg-danger w-10 h-0.5 my-2"></div>
                  <p className="text-second_text text-sm ">{about.desc}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="bg-danger w-8 items-center justify-center m-auto h-0.5"></div>
    </section>
  );
};

export default AboutUs;
