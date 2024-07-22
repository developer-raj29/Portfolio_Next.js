import React from "react";
import Arrow from "../../../public/Images/arrow.svg";
import Data from "../../app/api/data.js";
import All_Button from "@/components/Sub_Component/All_Button";
import Card from "./Card";
import Image from "next/image";

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

const Pro2_Container = (props: { pro: string | any }) => {
  const Projects = props.pro;

  return (
    <div className="project-page">
      <div className="md:p-14 sm:p-16 py-8 px-6 flex flex-wrap justify-center gap-14">
        {Projects.map((data: Data) => (
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
        ))}
      </div>

      <div className="w-[185px] mx-auto">
        <All_Button
          text={"Go to Home"}
          linkto={"/"}
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

export default Pro2_Container;
