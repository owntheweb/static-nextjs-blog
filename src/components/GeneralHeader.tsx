import Link from "next/link";
import './HomeHeaderStyle.css';
import TopNav from "./TopNav";

const GeneralHeader = () => {  
  return (
    <header className="lg:pb-2">
      <TopNav />
    </header>
  )
}

export default GeneralHeader;