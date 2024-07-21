import React from "react";
import Content from "./Sub_Component/Content";
import Hero from "./Sub_Component/Hero";
import StarsCanvas from "./UI_Components/StarBaground";

const Home = () => {
  return (
    <section className="w-[90%] h-[36rem] mx-auto flex justify-between relative">
      {/* <StarsCanvas /> */}
      <Content />
      <Hero />
    </section>
  );
};

export default Home;
