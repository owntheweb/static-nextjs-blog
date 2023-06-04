import Link from "next/link";
import './HomeHeaderStyle.css';
import TopNav from "./TopNav";
import OriginStory from "./OriginStory";

const HomeHeader = () => {  
  return (
    <header className="lg:pb-6 mb-8">
      <TopNav />
      <div className="headerSpace">
        <OriginStory className="headerStory" />
      </div>
    </header>
  )
}

export default HomeHeader;