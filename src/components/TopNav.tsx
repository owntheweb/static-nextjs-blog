import Link from "next/link";

const TopNav = () => {  
  return (
    <div className="mx-auto lg:max-w-4xl">
      <nav className="lg:rounded-bl-md lg:rounded-br-md bg-green-700 p-4 text-cream flex">
        <Link href="/">
          <img className="mr-4" src="/images/circle.svg" alt="circle" width={26} height={26} />
        </Link>
        <Link className="flex-1" href="/">
          <h1 className="font-semibold">Christopher Stevens</h1>
        </Link>
        <h2 className="pl-6 font-light max-sm:hidden text-cream">Worlds to explore. Worlds to create.</h2>
      </nav>
    </div>
  )
}

export default TopNav;