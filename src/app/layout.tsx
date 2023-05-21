import Image from 'next/image'
import './globals.css'
import { Inter } from 'next/font/google'

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
    <header className="text-center bg-slate-800 p-8 my-6 rounded-md">
      <Image src="/logo.png" alt="logo" width={40} height={40} className="mx-auto" />
      <h1 className="text-2xl text-white font-bold mt-4">Christopher Stevens Blog</h1>
      <p className="text-slate-300">Hello world.</p>
    </header>
  );

  const footer = (
    <footer className="border-t border-slate-500 mt-6 py-6 text-center text-slate-400">
      <p>Built by Christopher Stevens</p>
    </footer>
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
