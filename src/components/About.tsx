"use client";
import React from "react";
import data from "../app/api/data";
import AboutContent from "@/components/Sub_Component/AboutContent";
import { MagicCard } from "./UI_Components/MagicCardProps";
import { useTheme } from "next-themes";
import AboutHero from "@/components/Sub_Component/AboutHero";
import AboutIMG from "../../public/Images/Profile pic.jpg";

interface About {}

const About: React.FC = () => {
  // const { theme } = useTheme();
  const DATA = data.About;

  // console.log(DATA);

  return (
    <section className="w-full lg:h-[40rem] md:h-[64rem] h-[66rem] xl:px-10 sm:px-6 px-0 mx-auto flex items-center">
      {DATA.map((item, index) => {
        return (
          <>
            {/* <MagicCard
              className="cursor-pointer flex-col items-center justify-center shadow-2xl text-4xl"
              gradientColor={theme === "dark" ? "#262626" : "#c4ed0f"}
            > */}
            <div className="about-page" key={index}>
              <AboutHero image={AboutIMG} id={item.id} />
              <AboutContent
                id={item.id}
                title={item.title}
                heading={item.heading}
                description={item.description}
                email={item.email}
                location={item.location}
                path={"/about"}
              />
            </div>
            {/* </MagicCard> */}
          </>
        );
      })}
    </section>
  );
};

export default About;
