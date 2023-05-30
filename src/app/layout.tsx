import React, { useState } from "react";
import './globals.css'
import { Inter } from 'next/font/google'
import SideNav from '@/components/SideNav';
import Link from "next/link";
import './style.css';

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
  const header = (
    <header className="lg:pb-6 mb-8">
      <div className="mx-auto lg:max-w-4xl">
        <div className="lg:rounded-bl-md lg:rounded-br-md bg-green-700 py-4 px-6 text-cream flex">
          <Link href="/">
            <img className="mr-4" src="/images/circle.svg" alt="circle" width={26} height={26} />
          </Link>
          <Link className="flex-1" href="/">
            <h1 className="font-semibold">Christopher Stevens</h1>
          </Link>
          <h2 className="pl-6 font-light max-sm:hidden text-cream">Worlds to explore. Worlds to create.</h2>
        </div>
      </div>
      <div className="headerSpace"></div>
    </header>
  );

  const footer = (
    <footer className="border-t border-cream mt-6 py-6">
      <p>
        <Link className="text-cream hover:underline" href="/">
          &copy; Christopher Stevens
        </Link>
      </p>
    </footer>
  );

  return (
    <html lang="en">
      <body className={
        `${inter.className}
        bg-[url('/images/header-background-640.jpg')]
        sm:bg-[url('/images/header-background-768.png')]
        md:bg-[url('/images/header-background-1024.png')]
        lg:bg-[url('/images/header-background-1280.png')]
        xl:bg-[url('/images/header-background-1536.png')]
        bg-no-repeat
        bg-top`}>
        {header}
        <div className="mx-auto lg:max-w-4xl py-8 lg:rounded-md drop-shadow-2xl aged-background">
          <div className="flex">
            <SideNav className="flex-none w-48 max-sm:hidden" />
            <div className="">
              {children}
            </div>
          </div>
          {footer}
        </div>
      </body>
    </html>
  )
}
