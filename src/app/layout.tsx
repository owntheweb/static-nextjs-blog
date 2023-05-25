import React, { useState } from "react";
import Image from 'next/image'
import './globals.css'
import { Inter } from 'next/font/google'
import ExportedImage from "next-image-export-optimizer";
import SideNav from '@/components/SideNav';

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
    <header className="bg-slate-800 p-8 mb-6">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex">
          <div className="flex-none w-48">
            <ExportedImage src="/logo.png" alt="logo" width={40} height={40} />
          </div>
          <div>
            <h1 className="text-2xl text-white font-bold mb-2">Christopher Stevens Blog</h1>
            <p className="text-slate-300">Worlds to explore. Worlds to create.</p>
          </div>
        </div>
      </div>
    </header>
  );

  const footer = (
    <footer className="border-t border-slate-500 mt-6 py-6 text-slate-400">
      <p>&copy; Christopher Stevens</p>
    </footer>
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex">
            <SideNav className="flex-none w-48" />
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
