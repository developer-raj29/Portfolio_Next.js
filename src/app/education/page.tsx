import React from "react";
import Education_Com from "@/components/Education";
import Contact from "@/components/Contact";

const Education = () => {
  return (
    <main className="mt-[8rem] flex flex-col gap-10">
      <section className="md:w-11/12 w-[98%] mx-auto">
        <Education_Com />
      </section>
      <Contact />
    </main>
  );
};

export default Education;

// 1280 px
//        1152 px
// 1024 px
//       896 px
// 768 px
//       704 px
// 640 px
//
//
