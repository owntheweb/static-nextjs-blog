import SideNav from "./SideNav";
import Footer from "./Footer";
import GeneralHeader from "./GeneralHeader";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const GeneralLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {  
  return (
    <html lang="en">
      <body className={
        `${inter.className}
        bg-[url('/images/header-sec-background-640.jpg')]
        sm:bg-[url('/images/header-sec-background-768.jpg')]
        md:bg-[url('/images/header-sec-background-1024.jpg')]
        lg:bg-[url('/images/header-sec-background-1280.jpg')]
        xl:bg-[url('/images/header-sec-background-1536.jpg')]
        bg-no-repeat
        bg-top h-full`}>
        <GeneralHeader />
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

export default GeneralLayout;