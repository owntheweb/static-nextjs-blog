import Link from "next/link";
import Social from "./Social";

const Footer = () => {  
  return (
    <footer className="border-t border-cream mt-6 py-6 flex">
      <div className="flex-1 sm:hidden">
        <Social />
      </div>
      <div className="flex-1-1">
        <Link className="text-cream hover:underline" href="/">
          &copy; Christopher Stevens
        </Link>
      </div>
    </footer>
  )
}

export default Footer;