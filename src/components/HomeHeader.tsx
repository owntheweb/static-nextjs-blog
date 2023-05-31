import Link from "next/link";
import './HomeHeaderStyle.css';
import TopNav from "./TopNav";

const HomeHeader = () => {  
  return (
    <header className="lg:pb-6 mb-8">
      <TopNav />
      <div className="headerSpace"></div>
    </header>
  )
}

export default HomeHeader;