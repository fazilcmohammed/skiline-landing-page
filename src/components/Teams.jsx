import React from "react";
import { teams } from "../assets/constant";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";


const Teams = () => {
  return (
    <section >
      <div className="px-28 py-20">
        <div>
          <h3 className="text-[18px] text-[#96BB7C] font-semibold">Team</h3>
          <h1 className="text-4xl text-[#252B42] font-bold mt-7">
            Get Quality Education
          </h1>
          <p className="text-second_text text-lg my-3">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>

        <div className="flex items-center justify-evenly gap-10 my-10">
            {
                teams.map((team, index) => (
                    <div key={index} className="rounded-2xl shadow-xl text-center ">
                        <img src={team.img} alt="" className="w-52 rounded-t-2xl" />
                        <h1 className="text-[16px] font-bold text-text mt-3 capitalize">{team.name}</h1>
                        <h3 className="text-sm text-second_text font-semibold capitalize">{team.role} </h3>
                        <div className="flex text-primary text-2xl items-center justify-center my-3 gap-2 mb-5">
                            <FaFacebook/>
                            <IoLogoInstagram/>
                            <FaTwitter/>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
      <div className="bg-danger w-8 items-center justify-center m-auto h-1"></div>
    </section>
    
  );
};

export default Teams;
