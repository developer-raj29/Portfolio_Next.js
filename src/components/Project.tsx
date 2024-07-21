import React from "react";
import Data from "../app/api/data";
import Pro_Container from "./Sub_Component/Pro_Container";

const Project = () => {
  const pro = Data.Project;

  return (
    <section className="pt-[50px] project-section">
      <div className="mx-auto md:max-w-[740px] sm:max-w-[630px] max-w-[380px] text-center">
        <h2 className="h2-heading">
          Work Experience & What I Have Done This Projects
        </h2>
        <h1 className="h1-heading projects">My Projects</h1>
      </div>
      <Pro_Container pro={pro} />
    </section>
  );
};

export default Project;
