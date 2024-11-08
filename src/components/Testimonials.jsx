import React from "react";
import { testimonials } from "../assets/constant";

const Testimonials = () => {
  return (
    <section >
      <div className=" px-10 md:px-28 py-20">
        <div>
          <h3 className="text-[18px] text-[#96BB7C] font-semibold">
            Testimonials
          </h3>
          <h1 className="text-4xl text-[#252B42] font-bold mt-7">
            Watch Our Courses
          </h1>
          <p className="text-second_text text-lg my-3">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>

        <div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            {
                testimonials.map((testimonial, index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-16 text-center">
                        <img src={testimonial.img} alt="" className="w-32 rounded-full" />
                        <p className="text-sm text-second_text mt-5">{testimonial.comment}</p>
                        <img src={testimonial.stars} alt="" className="my-3"/>
                        <h1 className="font-bold text-text text-[16px]">{testimonial.name}</h1>
                        <h3 className="font-bold text-second_text text-sm">{testimonial.role}</h3>
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

export default Testimonials;
