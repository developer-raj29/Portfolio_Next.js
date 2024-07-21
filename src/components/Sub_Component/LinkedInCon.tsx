import React from "react";
import Model from "../../../public/3D ICON/LinkdIn-Model.png";
import photo from "../../../public/3D ICON/Passport pic.jpg";
import Link from "next/link";
import Tilt from "./Tilt";
import Image from "next/image";
import baground from "../../../public/Images/linkdin-bg.jpg";

const LinkedInCon = () => {
  return (
    <div className="flex lg:flex-row flex-col text-center items-center w-full h-full gap-12 text-black">
      <div
        // href={"https://www.linkedin.com/in/rajyadav-2920r0218j8/"}
        className="md:w-[50%] sm:w-[61%] w-[100%]"
      >
        <Tilt>
          <div className="bg-white xl:w-[90%] sm:w-full xs:w-[75%] w-[90%] h-[23.5rem] mx-auto rounded-[13%] flex flex-col gap-4">
            <Image src={baground} className="background" alt="img" />
            <div>
              <Image
                src={photo}
                alt=""
                className="w-[6rem] h-[6rem] -mt-[3.5rem] mx-auto border-[2px] rounded-[10rem]"
              />
            </div>

            <h1 className="xl:text-[1.4rem] text-[1.2rem] font-semibold opacity-[75%]">
              Raj Yadav
            </h1>

            <p className="flex flex-col mx-auto xl:text-[1rem] sm:text-[0.8rem] text-[0.9rem] px-[3px]">
              <span className="font-semibold opacity-[41%]">
                "🚀 Passionate (SDE) - Software
              </span>
              <span className="font-semibold opacity-[41%]">
                Development Engineer | DSA | MERN stack
              </span>
              <span className="font-semibold opacity-[41%]">
                or Full Stack Developer Enthusiast |
              </span>
              <span className="font-semibold opacity-[41%]">
                Open to Exciting Opportunities"
              </span>
            </p>

            <Link href="https://www.linkedin.com/in/rajyadav-2920r0218j8/">
              <button className="text-[1.2rem] font-semibold opacity-[70%]">
                View full profile
              </button>
            </Link>
          </div>
        </Tilt>
      </div>

      <div className="lg:w-[50%] md:w-[70%] sm:w-[90%] w-[100%]">
        <Tilt>
          <Image src={Model} alt="" className="w-[80%] mx-auto" />
        </Tilt>
      </div>
    </div>
  );
};

export default LinkedInCon;
