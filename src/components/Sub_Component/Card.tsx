"use client";
import React, { useState } from "react";
import Arrow from "../../../public/Images/arrow.svg";
import githubIcon from "../../../public/3D ICON/github.png";
import All_Button from "@/components/Sub_Component/All_Button";
import Link from "next/link";
import Tilt from "./Tilt";
import Image from "next/image";
import { BackgroundGradient } from "../UI_Components/background-gradient";

interface Skill {
  id: number;
  name: string;
  icon: any;
  index: number | null;
  image: any;
}

interface CardProps {
  image: any;
  title: string;
  date: string;
  info: string;
  link: string;
  weblink: string;
  skill: any;
  key: number;
}

const Card: React.FC<CardProps> = (props) => {
  const { image, title, date, info, link, weblink, skill, key } = props;

  const [readmore, setReadMore] = useState<boolean>(false);

  const description = readmore ? info : `${info.substring(0, 150)}....`;

  function readmoreHanlder() {
    console.log("click hua hn");
    setReadMore(!readmore);
    // console.log(description);
  }

  return (
    <Tilt>
      {/* <BackgroundGradient className="rounded-[45px] max-w-sm bg-white dark:bg-zinc-900"> */}
      <div
        className="w-[325px] h-full project-card-shadow rounded-[2.5rem] flex flex-col justify-center gap-5 p-4 hover:-translate-y-5 transition-all duration-700"
        key={key}
      >
        <div className="relative">
          <Image
            src={image}
            alt="Main Image"
            className=" rounded-t-[2rem] border"
          />
          <Link href={link}>
            <Image
              src={githubIcon}
              alt="GithubIcon"
              className="absolute w-[60px] top-0 right-0"
            />
          </Link>
        </div>
        <div className="flex gap-3">
          {skill.map((skill: Skill) => (
            <div className="w-[35px]" key={skill.id}>
              <Image src={skill.image} alt={skill.name} />
            </div>
          ))}
        </div>
        <div className="text-[16px] font-bold ">
          <p>{title}</p>
          <p>{date}</p>
        </div>
        <div>
          <p className="text-justify text-[14px]">
            {description}
            <span
              className="text-blue-600 cursor-pointer text-[15px]"
              onClick={readmoreHanlder}
            >
              {readmore ? `...show less` : `read more`}
            </span>
          </p>
        </div>

        <div className="w-[225px] mx-auto">
          <All_Button
            text={"Go to Web page"}
            linkto={weblink}
            page={"_blank"}
            icon={<Image src={Arrow} alt="arrow" loading="lazy" />}
          />
          {/* <Link to={weblink}>
            <button className="w-full flex h-full py-2 px-3 text-[1.1rem] font-bold rounded-[15rem] bg-[#c1ffff] text-black">
              Go to Web page
              <img src={Arrow} alt="arrow" loading="lazy" />
            </button>
          </Link> */}
        </div>
      </div>
      {/* </BackgroundGradient> */}
    </Tilt>
  );
};

export default Card;
