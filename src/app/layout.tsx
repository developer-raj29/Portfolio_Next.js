import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { BackgroundBeams } from "@/components/UI_Components/background-beams";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ContactInfo from "@/components/Sub_Component/ContactInfo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Developer | Raj🧑🏻",
  description: "I'm a fullstack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-screen h-screen overflow-x-hidden mx-auto">
          <div className="relative flex justify-center w-[95%] mx-auto">
            <NavBar />
          </div>
          {children}
          {/* <BackgroundBeams /> */}
          <Footer />
        </main>
      </body>
    </html>
  );
}
