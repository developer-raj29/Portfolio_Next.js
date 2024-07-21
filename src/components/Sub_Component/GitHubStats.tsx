import React from "react";
import Model from "../../../public/3D ICON/Github-Model.png";
import Tilt from "./Tilt";
import Image from "next/image";
import Link from "next/link";

const GitHubStats = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center w-full h-full gap-12">
      {/* <Tilt></Tilt> */}
      <div className="lg:w-[55%] md:w-[75%] sm:w-[90%] w-full">
        <Tilt>
          <Image src={Model} alt="" className="w-[80%] mx-auto" />
        </Tilt>
      </div>
      <div className="lg:w-[55%] md:w-[70%] sm:w-[90%] w-full p-4 flex flex-col gap-5">
        <picture>
          <Link href="#">
            <Tilt>
              <img
                src="https://github-readme-stats.vercel.app/api?username=Rajyadav2912&theme=tokyonight&hide_border=false&include_all_commits=false&count_private=false"
                alt="img"
                className="w-full"
              />
            </Tilt>
          </Link>
        </picture>
        <picture>
          <Link href="#">
            <Tilt>
              <img
                src="https://github-readme-streak-stats.herokuapp.com?user=Rajyadav2912&theme=tokyonight&border_radius=10&date_format=j%20M%5B%20Y%5D"
                alt="img"
              />
            </Tilt>
          </Link>
        </picture>
      </div>
    </div>
  );
};

export default GitHubStats;
