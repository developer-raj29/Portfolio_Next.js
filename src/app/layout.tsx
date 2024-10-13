// app/layout.tsx (Server Component)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "react-toastify/dist/ReactToastify.css";
import ClientWrapper from "./ClientWrapper"; // Import the client component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Developer | Raj🧑🏻",
  description: "I'm a fullstack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-screen h-screen overflow-x-hidden mx-auto">
          <ClientWrapper>
            <div className="relative flex justify-center w-[95%] mx-auto">
              <NavBar />
            </div>
            {children}
            <Footer />
          </ClientWrapper>
        </main>
      </body>
    </html>
  );
}
