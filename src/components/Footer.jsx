import React from "react";
import { footerLinks } from "../assets/constant";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="px-10 md:px-28 py-20 text-center md:text-left items-center">
        <div className="flex flex-col md:flex-row md:items-start justify-center md:justify-between gap-10">
          {footerLinks.map((links, index) => (
            <div key={index}>
              <h1 className="font-bold text-[16px] text-text mb-4">{links.title}</h1>
              <ul>
                {Object.values(links.links).map((link, index) => (
                  <li
                    key={index}
                    className="text-second_text font-semibold text-sm my-2"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h1 className="font-bold text-[16px] text-text mb-4">Get In Touch</h1>
            <ul className="flex flex-col items-center md:items-start justify-center">
              <li className="text-second_text font-semibold text-sm my-2 flex flex-col md:flex-row items-center gap-3">
                <FiPhone className="text-primary text-2xl" /> (480) 555-0103
              </li>
              <li className="text-second_text font-semibold text-sm my-2 flex flex-col md:flex-row items-center gap-3">
                <MdOutlineLocationOn className="text-primary text-2xl" /> 4517
                Washington Ave. Manchester, <br /> Kentucky 39495
              </li>
              <li className="text-second_text font-semibold text-sm my-2 flex flex-col md:flex-row items-center gap-3">
                <MdOutlineMail className="text-primary text-2xl" />{" "}
                debra.holt@example.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] px-10 md:px-28 py-3 flex flex-col md:flex-row items-center justify-between">
        <p className="text-second_text font-semibold text-sm text-center md:text-left w-52 md:w-full ">
          Made by Fazil Mohammed All Rights Reserved
        </p>
        <div className="flex text-primary text-xl items-center justify-center my-3 gap-3 mb-5">
          <FaFacebook />
          <IoLogoInstagram />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
