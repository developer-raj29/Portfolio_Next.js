"use client";
import React from "react";
import { FaDownload } from "react-icons/fa6";
// import resume from "../../";
import Handler from "../../app/api/index";
// import TextAnimation from "../Animation/TextAnimation";
import ALLButton from "./All_Button";
import Link from "next/link";
import Image from "next/image";
import TextAnimation from "./TextAnimation";

const Content = () => {
  const Social = Handler.Social_Media;

  return (
    <div className="xl:w-[48%] lg:w-[50%] md:w-[55%] sm:w-[70%] xs:w-[95%] w-[100%] h-auto flex flex-col sm:justify-center justify-start sm:mt-0 mt-24 md:z-0 z-10">
      <h2 className="xl:text-[3rem] lg:text-[2.2rem] md:text-[2rem] sm:text-[1.8rem] text-[2rem] font-black leading-normal">
        Hello, I&#39;m
      </h2>
      <h1
        className="xl:text-[4rem] lg:text-[3.8rem] md:text-[3.6rem] sm:text-[3.5rem] text-[3rem] font-black leading-normal animate-text bg-gradient-to-r
       from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
      >
        Raj Yadav
      </h1>
      <h2 className="flex gap-2 xl:text-[2rem] lg:text-[1.8rem] sm:text-[1.6rem] xs:text-[1.3rem] text-[1.1rem] font-black leading-normal">
        And I&#39;m
        <span className="auto-typing-1 text-[#f8ce96]">
          {/* <TextAnimation /> */}
          {/* Full Stack Developer */}
          <TextAnimation />
        </span>
      </h2>
      <p className="xl:text-[1.02rem] lg:text-[0.9rem] sm:text-[0.81rem] text-[0.8rem] mt-2 font-semibold leading-normal">
        I recently completed my B.Tech in ECE from PIEMR, Indore. I am
        passionate about the software industry.
      </p>
      <div className="flex md:justify-between sm:gap-4 gap-2  mt-4 xl:w-[25rem] w-[24rem]">
        {Social.map((link) => {
          return (
            <Link href={link.path} target="_blank" key={link.id}>
              <Image
                src={link.image}
                alt={link.name}
                className="xl:w-[4.5rem] md:w-[3.6rem] w-[3.4rem]"
                loading="lazy"
              />
            </Link>
          );
        })}
      </div>

      <ALLButton
        text={"Download"}
        page={"_blank"}
        linkto={"/Raj Yadav_Resume.pdf"}
        icon={<FaDownload />}
      />
    </div>
  );
};

export default Content;
