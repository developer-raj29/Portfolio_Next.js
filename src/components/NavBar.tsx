"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/Images/Logo 2.png";
import circle from "../../public/Images/circle.svg";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

interface Link {
  id: number;
  name: string;
  href: string;
}

const links = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    name: "Projects",
    href: "/projects",
  },
  {
    id: 4,
    name: "Education",
    href: "/education",
  },
  {
    id: 5,
    name: "Contact",
    href: "/contact",
  },
];

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // border-[#1e293b]

  return (
    <nav
      className="fixed flex items-center lg:justify-around justify-between mx-auto xl:w-[95%] lg:w-[94%] md:w-[90%] sm:w-[95%] w-[90%] lg:h-[12%] md:h-[13%] sm:h-[12%] xs:h-[14%] h-[12%] mt-2 xl:px-0 lg:px-1 md:px-12 sm:px-12 px-6 xl:gap-16 sm:gap-[10rem] gap-0 z-[9999999] backdrop-blur-md xl:rounded-s-[3rem] xl:rounded-e-[3rem] rounded-s-[4rem] rounded-e-[4rem]
     nav-animation transition-all duration-700"
    >
      <div className="xl:w-[21%] lg:w-[26%] md:w-[40%] sm:w-[45%] w-[90%] xl:-ml-14 lg:ml-6 md:ml-3 sm:ml-2">
        <Link href={"/"} className="relative flex items-center gap-2">
          <Image
            src={circle}
            alt=""
            className="xl:w-[30%] sm:w-[28%] w-[20%]"
          />
          <Image
            src={logo}
            alt="logo"
            className="absolute xl:w-[31%] lg:w-[28%] md:w-[29%] sm:w-[28.5%] xs:w-[21%] w-[20%] rounded-bl-[3rem] rounded-br-[3.2rem] top-[2px] "
          />
          <h2 className="nav-text lg:text-[1.8rem] md:text-[2rem] sm:text-[2rem] xs:text-[1.8rem] text-[1.5rem] animate-text bg-gradient-to-br from-blue-600 via-purple-600 to-yellow-400 bg-clip-text text-transparent">
            Raj Yadav
          </h2>
        </Link>
      </div>

      <ul
        className={`${
          isOpen
            ? "lg:hidden flex flex-col items-center bg-gradient-to-br from-gray-500 to-black backdrop-blur-md absolute md:top-[170px] sm:top-[95px] xs:top-[130px] top-[115px] md:py-8 sm:py-6 py-5 md:px-14 sm:px-12 px-11 gap-6 md:right-5 sm:right-2 right-0 border border-[#858484] shadow-2xl shadow-slate-700 rounded-[2rem]"
            : "lg:flex hidden gap-12"
        } lg:flex-row list-none`}
      >
        {links.map((link: Link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className="font-semibold text-base hover:text-[#268feb] hover:underline underline-offset-2 transition-all duration-500"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="lg:hidden flex items-center"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? <RxCross1 fontSize={33} /> : <HiMenuAlt3 fontSize={33} />}
      </button>
    </nav>
  );
};

export default NavBar;

// 1280px
//       1152px
// 1024px
//       896 px
// 768px
//      704px
// 640 px
