import Link from "next/link";

const Footer = () => {  
  return (
    <footer className="border-t border-cream mt-6 py-6">
      <p>
        <Link className="text-cream hover:underline" href="/">
          &copy; Christopher Stevens
        </Link>
      </p>
    </footer>
  )
}

export default Footer;