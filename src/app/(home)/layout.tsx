import React from "react";
import '../globals.css'
import { Inter } from 'next/font/google'
import Footer from "@/components/Footer";
import SideNav from "@/components/SideNav";
import HomeHeader from "@/components/HomeHeader";

const inter = Inter({ subsets: ['latin'] })

// TODO: Fill metadata in referencing (this is new I learned):
// TODO: title template format may be wrong.
// TODO: how is this going to work with generated blog posts hmm...
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata = {
  title: {
    default: 'Christopher Stevens: Worlds to explore. Worlds to create.',
    template: '%s | Christopher Stevens'
  },
  description: 'Christopher Stevens explores, develops and designs.',
}

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
