import React from "react";

const NewsLetter = () => {
  return (
    <section>
      <div className="px-10 md:px-28 py-20 bg-faded_secondary">
        <div>
          <h3 className="text-[18px] text-[#96BB7C] font-semibold text-center">Newsletter</h3>
          <h1 className="text-4xl text-[#252B42] font-bold text-center mt-7">
            Watch Our Courses
          </h1>
          <p className="text-second_text text-lg my-3 text-center">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics{" "}
          </p>
          <div className="flex items-center justify-center my-12">
            <input type="email" className="px-5 w-[200px] md:w-[400px] border-[1px] border-gray-400 py-3" placeholder="Your Email"/>
            <button className="bg-primary text-white font-medium px-5 py-3 border-[1px] border-primary">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="bg-danger w-8 items-center justify-center m-auto h-0.5"></div>
    </section>
  );
};

export default NewsLetter;
