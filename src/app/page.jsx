import React from "react";
import Education from "@/components/Education";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import About from "@/components/About";
import Home from "@/components/Home";
import StarsCanvas from "@/components/UI_Components/StarBaground";
import Contact from "@/components/Contact";

const page = () => {
  // pt-1 w-11/12 mx-auto
  return (
    <main className="flex flex-col gap-12 mt-[6rem] w-[95%] mx-auto">
      <div className="w-full xl:h-[40rem] h-[38rem] xl:mt-[4rem] mt-0 relative mx-auto">
        <Home />
        <StarsCanvas />
      </div>
      <About />
      <Education />
      <Skill />
      <Project />
      <Contact />
    </main>
  );
};

export default page;

// 1280px
//         1152px
// 1024px
//       896 px
// 768px
//      704px
// 640 px
