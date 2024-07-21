import React from "react";
import Arrow from "../../../public/Images/arrow.svg";
import Data from "../../app/api/data.js";
import All_Button from "@/components/Sub_Component/All_Button";
import Card from "./Card";
import Image from "next/image";
import { BackgroundGradient } from "../UI_Components/background-gradient";

interface Data {
  data: any;
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
  skills: any; // Array of skills
  weblink: string; // Link to the web page of the project if available.
}

interface Container_Props {
  pro: string | any;
}

const Pro_Container: React.FC<Container_Props> = (props) => {
  const { pro } = props;
  const projects = pro;

  return (
    <div className="project-page">
      <div className="py-14 px-5 flex flex-wrap justify-center xl:gap-10 lg:gap-[5.5rem] md:gap-[1.8rem] sm:gap-[2.8rem] gap-[1.8rem]">
        {projects.map((data: Data) => (
          <Card
            key={data.id}
            date={data.date}
            image={data.image}
            title={data.title}
            info={data.description}
            link={data.link}
            weblink={data.weblink}
            skill={data.skills}
          />
          // </BackgroundGradient>
        ))}
      </div>

      <div className="w-[165px] mx-auto">
        <All_Button
          text={"See More"}
          linkto={"/projects"}
          icon={<Image src={Arrow} alt="arrow" loading="lazy" />}
        />
        {/* <Link to="/projects">
            <button className="w-full flex h-full py-2 px-4  text-[1.1rem] font-bold rounded-[15rem] bg-[#c1ffff] text-black">
              See More
              <img src={Arrow} alt="arrow" loading="lazy" />
            </button>
          </Link> */}
      </div>
    </div>
  );
};

export default Pro_Container;
