import React from "react";
import '../globals.css'
import { Inter } from 'next/font/google'
import Footer from "@/components/Footer";
import SideNav from "@/components/SideNav";
import HomeHeader from "@/components/HomeHeader";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={
        `${inter.className}
        bg-[url('/images/header-background-768.jpg')]
        md:bg-[url('/images/header-background-1024.jpg')]
        lg:bg-[url('/images/header-background-1280.jpg')]
        xl:bg-[url('/images/header-background-1536.jpg')]
        bg-no-repeat
        bg-top h-full`}>
        <HomeHeader />
        <div className="mx-auto lg:max-w-4xl py-8 lg:rounded-md drop-shadow-2xl px-6 lg:px-0">
          <div className="flex">
            <SideNav className="flex-none w-48 max-sm:hidden" />
            <div className="">
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
