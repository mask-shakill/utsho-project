import React from "react";
import imgTel from "../../assets/call1.png";
import imgLine1 from "../../assets/line1.png";
import imgLine2 from "../../assets/line2.png";
import imgImg1 from "../../assets/img1.png";
import imgBrand1 from "../../assets/branlogo1.png";
const ProjectOne = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#0A2449] flex text-white px-14  pt-36 h-[1080px] w-[1080px]">
        <section className="w-1/2 pl-28 relative">
          <img
            src={imgBrand1}
            className="absolute -top-12 -left-10 w-[35%]"
            alt=""
          />
          <div>
            <h1 className="text-[50px] font-primary font-medium">Include</h1>
            <h1 className="text-[50px] font-primary font-medium">Company</h1>
            <h1 className="text-[90px] text-[#FEA106] font-bold">Online</h1>
            <h1 className="text-[50px] font-primary font-medium">Marketing</h1>
            <h1 className="text-[50px] font-primary font-medium">Agency</h1>
            <h1 className="text-[50px] font-primary font-medium">
              Our Service
            </h1>
            <ul className="italic list-disc pl-10 text-[30px]">
              <li>Strategy and Planning</li>
              <li>Corporate Finance</li>
              <li>Market Research</li>
            </ul>
            <button className="bg-[#FEA106] mt-5 px-6 py-3 flex items-center gap-x-3 rounded-full">
              <img
                src="https://cdn-icons-png.freepik.com/256/10023/10023577.png?semt=ais_hybrid"
                className="w-[30px]"
                alt=""
              />
              <span className="text-black font-bold text-xl">LEARN MORE</span>
            </button>
            <div className="flex items-center  gap-x-4 pt-7">
              <img src={imgTel} className="" alt="" />
              <div className="text-2xl">
                <p>Call to find out more</p>
                <p>+23412313434</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-1/2 relative">
          <img src={imgImg1} className="" alt="" />
          <img
            src={imgLine1}
            className=" w-[800px] h-[750px] absolute top-0"
            alt=""
          />
          <img
            src={imgLine2}
            className=" absolute  w-[800px] h-[780px] -top-[55.5px] -right-[9px]"
            alt=""
          />
        </section>
      </div>
    </div>
  );
};

export default ProjectOne;
