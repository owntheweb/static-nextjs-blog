import Link from 'next/link';
import './HomeHeaderStyle.css';
import TopNav from './TopNav';

const GeneralHeader = () => {
    return (
        <header className="lg:pb-2">
            <TopNav />
            <a href="#main" id="screen-reader-content-link">
                Skip to main content
            </a>
        </header>
    );
};

export default GeneralHeader;
