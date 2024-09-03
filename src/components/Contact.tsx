"use client";
import React, { useRef, useState } from "react";
import hero from "../../public/Images/3d-Contact-image.png";
import Web from "../../public/3D ICON/web-development.png";
import language from "../../public/3D ICON/language.png";
import Tilt from "@/components/Sub_Component/Tilt";
import Image from "next/image";
import { BackgroundBeams } from "@/components/UI_Components/background-beams";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
require("dotenv").config();

// import { Link } from "react-router-dom";

// interface ContactType {
//   fullName: string;
//   email: string;
//   subject: string;
//   phone: string;
//   message: string;
//   form:any;
// }

const Contact: React.FC = () => {
  const form = useRef();
  const [formData, setformData] = useState({
    fullName: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

//  const PublicKey = "YOeeliDWO8RXStjkb";
 const TEMPLATE_ID = "template_j283led";
 const YOUR_SERVICE_ID = "service_okmc83m";

  const changeHanlder = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLFormElement
    >
  ) => {
    const { name, value } = e.target;

    setformData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    // console.log("changeHanlder", formData);
  };

  function submitHandler(e: React.MouseEvent) {
    e.preventDefault();
    console.log("click submit");

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      toast.error("All fields are required!");
    } else {
      emailjs.sendForm(YOUR_SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: "YOeeliDWO8RXStjkb",
      });
      toast.success("Thankyou 😊 your infromation accepted!");
      setformData({
        fullName: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
    }
    // console.log(formData);
  }

  return (
    <>
      <section className="py-[50px] pt-1 w-11/12 mx-auto">
        <div className="mx-auto max-w-[740px] text-center">
          <h2 className="h2-heading">Get In Touch</h2>
          <h1 className="h1-heading contact">Contact Me</h1>
        </div>

        <ToastContainer position="bottom-right" />

        <div className="contact-page">
          <div className="xl:w-[35%] lg:w-[50%] sm:w-[58%] w-full relative">
            <Tilt>
              <Image src={hero} alt="" className="relative w-full" loading="lazy"/>
            </Tilt>
            <Image
              src={Web}
              alt=""
              loading="lazy"
              className="absolute xl:w-[70px] lg:w-[65px] md:w-[80px] sm:w-[75px] w-[60px] xl:top-[4px] lg:top-[6px] top-[40px] xl:right-[10px] lg:right-[16px] right-0 topdown"
            />
            <Image
              src={language}
              alt=""
              loading="lazy"
              className="absolute xl:w-[70px] lg:w-[65px] md:w-[80px] sm:w-[75px] w-[60px] sm:top-[20rem] top-[18rem] lg:left-[1rem] left-0 rightleft"
            />
          </div>

          <div className="xl:w-[45%] lg:w-[56%] md:w-[90%] sm:w-[90%] w-[98%] mx-auto">
            <Tilt>
              <div className="text-black rounded-3xl p-[1px] animate-text hover:bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500">
                <div className="flex rounded-3xl items-center justify-center flex-col pb-3 bg-black">
                  <form ref={form} className="flex flex-col sm:items-start items-center">
                    <div className="flex flex-wrap justify-center gap-4 p-5 text-black">
                      <div className="flex lg:flex-nowrap flex-wrap sm:gap-2 gap-4 w-[100%]">
                        <input
                          type="text"
                          className="xl:w-full md:w-[49%] sm:w-[49%] w-full xl:h-[50px] h-[45px] px-3 rounded-lg outline-none"
                          placeholder="Enter full name..."
                          name="fullName"
                          onChange={changeHanlder}
                          value={formData.fullName}
                        />

                        <input
                          type="email"
                          className="xl:w-full md:w-[49%] sm:w-[49%] w-full xl:h-[50px] sm:h-[45px] h-[40px] px-3 rounded-lg outline-none"
                          placeholder="Enter email address..."
                          name="email"
                          onChange={changeHanlder}
                          value={formData.email}
                        />
                      </div>

                      <div className="flex lg:flex-nowrap flex-wrap sm:gap-2 gap-4 w-[100%]">
                        <input
                          type="tel"
                          className="xl:w-full md:w-[49%] sm:w-[49%] w-full xl:h-[50px] sm:h-[45px] h-[40px] px-3 rounded-lg outline-none"
                          placeholder="Enter mob. No.."
                          name="phone"
                          onChange={changeHanlder}
                          value={formData.phone}
                        />

                        <input
                          type="text"
                          className="xl:w-full md:w-[49%] sm:w-[49%] w-full xl:h-[50px] sm:h-[45px] h-[40px] px-3 rounded-lg outline-none"
                          placeholder="Enter email Subject..."
                          name="subject"
                          onChange={changeHanlder}
                          value={formData.subject}
                        />
                      </div>

                      <textarea
                        // row={5}
                        // col={10}
                        placeholder="Message...."
                        className="w-full md:h-[200px] sm:h-[180px] h-[170px] rounded-lg p-3 outline-none"
                        name="message"
                        onChange={changeHanlder}
                        value={formData.message}
                      ></textarea>
                    </div>

                    <div className="w-[120px] xl:ml-5 lg:ml-6 sm:ml-[15.5rem] ml-[1rem]">
                      <button
                        type="submit"
                        onClick={submitHandler}
                        className="w-full h-full py-2 px-6 gap-1 text-[1.1rem] font-bold rounded-3xl bg-[#c1ffff] text-black"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
        {/* <BackgroundBeams /> */}
      </section>
    </>
  );
};

export default Contact;
