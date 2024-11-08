import React from "react";
import image1 from '../assets/images/heroimg.png'

const HeroSection = () => {
  return (
    <section className='bg-[#FFF2F3] px-10 md:pl-28 py-'>
      <div className="flex flex-col md:flex-row items-center justify-between gap-0">
        <div>
          <h3 className="text-[18px] text-[#96BB7C] font-bold">Welcome</h3>
          <h1 className="text-[40px] md:text-[65px] leading-tight font-semibold my-7 text-[#252B42]">
            Best Learning <br /> Opportunities
          </h1>
          <p className="text-[24px] font-semibold my-7 text-[#737373]">
            Our goal is to make online <br /> eduction work for everyone
          </p>
          <div className="flex items-center gap-5">
            <button className="items-center gap-3 text-white font-bold px-5 py-3 rounded-md bg-[#96BB7C]">
              Join us
            </button>
            <button className="px-5 py-3 rounded-md text-primary font-bold border-[1px] border-[#96BB7C]">Learn More</button>
          </div>
        </div>
        <div>
            <img src={image1} alt="" className="w-[600px]"/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
