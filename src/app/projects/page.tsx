import React from "react";
import Data from "@/app/api/data";
import Pro2_Container from "@/components/Sub_Component/Pro2_Container";
import Contact from "@/components/Contact";

const Project = () => {
  const pro = Data.Projects;

  return (
    <section className="flex flex-col gap-10 mt-[8rem]">
      <div className="md:w-11/12 w-[98%] mx-auto">
        <div className="mx-auto md:max-w-[740px] sm:max-w-[630px] max-w-[380px] text-center">
          <h2 className="h2-heading">
            Work Experience & What I Have Done This Projects
          </h2>
          <h1 className="h1-heading project">My Projects</h1>
        </div>
        <Pro2_Container pro={pro} />
      </div>
      <Contact />
    </section>
  );
};

export default Project;
