"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
// import { BackgroundBeams } from "@/components/UI_Components/background-beams";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Loading from "../components/Sub_Component/Loading";
// import ContactInfo from "@/components/Sub_Component/ContactInfo";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Developer | Raj🧑🏻",
  description: "I'm a fullstack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setLoading(false);
    },4000);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-screen h-screen overflow-x-hidden mx-auto">
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className="relative flex justify-center w-[95%] mx-auto">
                <NavBar />
              </div>
              {children}
              {/* <BackgroundBeams />*/}
              <Footer />
            </>
          )}
        </main>
      </body>
    </html>
  );
}
