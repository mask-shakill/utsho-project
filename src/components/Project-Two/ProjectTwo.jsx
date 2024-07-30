import React from "react";
import backImage from "../../assets/background.png";
import imageOne from "../../assets/im1.png";
import cureImage from "../../assets/curve.png";
import redCurve from "../../assets/redcurve.png";
import arrowImg from "../../assets/arrow.png";
const ProjectTwo = () => {
  return (
    <div className="flex items-center justify-center pt-10 pb-20">
      <div
        className=" bg-cover h-[800px] w-[800px] relative"
        style={{ backgroundImage: `url(${backImage})` }}
      >
        <img src={imageOne} className="absolute top-0 right-0" alt="" />
        <img src={cureImage} className="absolute top-0 -right-3" alt="" />
        <img src={redCurve} className="absolute bottom-0 left-0" alt="" />

        <div className="pl-10 flex items-center pt-16">
          <img src={arrowImg} alt="" />
          <h1 className="text-white text-xl font-semibold pt-5">
            Liceria & Co.
          </h1>
        </div>
        <div>
          <p className="text-[#CB1616] pl-14 pt-14 text-[34px] font-primary font-bold">
            Sunset over the <br /> ocean, warmth <br />
            on my skin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectTwo;
