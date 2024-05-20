import { Roboto_Slab } from 'next/font/google';
import { Metadata } from 'next';
import { addBaseUrl, makeMetadata } from '@/components/utils/headerMeta';
import EmbeddedFrame from '@/components/EmbeddedFrame';
import PostThumbnail from '@/components/PostThumbnail';
import '../globals.css';
import './style.css';
import { PostMetadata } from '@/components/model/PostMetadata';
import Recommendations from './Recommendations';
import AdditionalActivity from './AdditionalActivity';
import Link from 'next/link';
import {
    bombBombPosts,
    castlePosts,
    commotionPosts,
    nutrienPosts,
    parsonsPosts,
    societyPosts,
    spaceFoundationPosts,
} from './ExperienceData';

const robertoSlab = Roboto_Slab({ subsets: ['latin'] });

export async function generateMetadata(params: any): Promise<Metadata> {
    const title = `Hire Chris | Christopher Stevens`;
    const description = `🎵 If you seek a web dev who can build and relay, hire Chris and your projects move forward today.`;
    const contentUrl = addBaseUrl(`/hire`);

    return makeMetadata({
        title: title,
        description: description,
        openGraph: {
            title: title,
            description: description,
            images: [addBaseUrl('/images/ai-me.jpg')],
            url: contentUrl,
        },
    });
}

export default function Hire() {
    return (
        <div id="main" role="main" className="post-col">
            <h1
                className={`text-2xl text-creamcicle mb-4 px-4 sm:px-0 ${robertoSlab.className}`}
            >
                Hire Chris
            </h1>
            <div
                className="prose mb-8 post p-4 sm:p-8 sm:rounded-md shadow-md bg-cream"
                style={{ maxWidth: 'inherit' }}
            >
                <EmbeddedFrame
                    title="Résumé Musical: Me In a Nutshell"
                    url="https://www.youtube-nocookie.com/embed/ojxTAgcpy5s"
                    height={486}
                />
                <p>Hello fellow human!</p>
                <p>
                    I'm a full stack web developer who started with design and
                    worked my way down the stack, serving everyone from budding
                    startups to some of the largest corporations in the world,
                    including Budweiser, Liberty Global, Nutrien, and
                    Progressive Insurance. About half of my career has been
                    focused on marketing endeavors, while the other half has
                    delved into enterprise-scale web applications.
                </p>
                <p>
                    Adventure is what I seek. If you're building something that
                    inspires and helps others and have a need for a well rounded
                    generalist developer with a creative flare and passion for
                    people, let's connect.
                </p>
                <p>
                    <Link href="https://www.linkedin.com/in/interactiveguru/">
                        Connect On LinkedIn
                    </Link>
                </p>
            </div>
            <h1
                className={`text-2xl text-creamcicle mb-4 px-4 sm:px-0 ${robertoSlab.className}`}
            >
                Skills
            </h1>
            <div
                className="prose mb-8 post p-4 sm:p-8 rounded-md shadow-md bg-cream"
                style={{ maxWidth: 'inherit' }}
            >
                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-0">
                    <ul className="m-0 block">
                        <li>Solving chewy challenges</li>
                        <li>TypeScript, JavaScript, Node</li>
                        <li>React, Angular</li>
                        <li>PHP</li>
                        <li>Twilio Flex, Serverless, Studio</li>
                        <li>MySQL, PostgreSQL, Oracle</li>
                    </ul>
                    <ul className="m-0 block">
                        <li>CSS, Sass, LESS, Tailwind</li>
                        <li>Amazon Web Services</li>
                        <li>Linux, bash, zsh</li>
                        <li>APIs</li>
                        <li>Responsive Design</li>
                        <li>Search Engine Optimization</li>
                    </ul>
                    <ul className="m-0 block">
                        <li>WordPress, Drupal</li>
                        <li>Single Board Computers</li>
                        <li>Print Design</li>
                        <li>ML/AI (AWS cert in progress)</li>
                    </ul>
                </div>
            </div>
            <h1
                className={`text-2xl text-creamcicle mb-4 px-4 sm:px-0 ${robertoSlab.className}`}
            >
                Experience
            </h1>
            <div
                className="prose mb-8 post p-4 sm:p-8 rounded-md shadow-md bg-cream"
                style={{ maxWidth: 'inherit' }}
            >
                <h3 className={robertoSlab.className}>
                    Senior Full Stack Developer at Level20: October 2023 - May
                    2024
                </h3>

                <p>
                    Successfully completed an extended contract with Progressive
                    Insurance's startup arm, Level20, upgrading and enhancing a
                    Twilio calling center for a home maintenance company called
                    Castle. Built calling center agent Flex CRM pulling in
                    customer data, quickly erased years of technical debt,
                    created an optimized build process, routed customers to
                    known agents, managed SMS and IVR studio flows.
                </p>

                <div
                    className="grid gap-2grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-8"
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    {castlePosts.map((post) => {
                        return <PostThumbnail {...(post as PostMetadata)} />;
                    })}
                </div>

                <h3 className={robertoSlab.className}>
                    Senior Software Engineer at BombBomb: June 2020 - June 2023
                </h3>

                <p>
                    Focused on React and PHP development for a large web app
                    that recorded and delivered video messages. Reduced the
                    production Oracle database to half the size by several
                    terabytes, moving infrequently accessed content to S3 for
                    reads/writes. Enabled compliance file transfers via
                    S3/Node.js for customers. As a tech lead, led password
                    protected videos, expiring videos, contributed to migration
                    of app from using Oracle to PostgreSQL, GDPR compliance, and
                    more.
                </p>

                <div
                    className="grid gap-2grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-8"
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    {bombBombPosts.map((post) => {
                        return <PostThumbnail {...(post as PostMetadata)} />;
                    })}
                </div>

                <h3 className={robertoSlab.className}>
                    Web Developer, Associate Principle at Parsons: February 2019
                    - May 2020
                </h3>

                <p>
                    Served as an Angular developer on multiple government
                    contract projects.
                </p>

                <div
                    className="grid gap-2grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-8"
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    {parsonsPosts.map((post) => {
                        return <PostThumbnail {...(post as PostMetadata)} />;
                    })}
                </div>

                <h3 className={robertoSlab.className}>
                    Full Stack Engineer at Nutrien: May 2018 - January 2019
                </h3>

                <p>
                    Worked with the world's largest agricultural retailer in a
                    hands-on tech lead role to help architect and build a new
                    online store for farmers (Node.js, React, ELK).
                </p>

                <div
                    className="grid gap-2grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-8"
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    {nutrienPosts.map((post) => {
                        return <PostThumbnail {...(post as PostMetadata)} />;
                    })}
                </div>

                <h3 className={robertoSlab.className}>
                    Full Stack Web Developer at Space Foundation - June 2009 -
                    May 2018
                </h3>

                <p>
                    Built/helped build over 24 Drupal websites (PHP, MySQL,
                    Drupal 6, 7, 8). Served in a tech lead-like role for a small
                    dev team within a marketing team. Created a tool to organize
                    and inform hundreds of attendees at meal events (PHP, MySQL,
                    JavaScript, jQuery, FPDF, SendGrid, Twilio). Created a QR
                    code generator and check-in email sender to speed up lines
                    at Space Symposium (Node.js, PHP, SendGrid). Created
                    web-synced digital signage solution used throughout Space
                    Symposium (Node.js, Raspberry Pi, Drupal). Created
                    interactive exhibits.
                </p>

                <div
                    className="grid gap-2grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-8"
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    {spaceFoundationPosts.map((post) => {
                        return <PostThumbnail {...(post as PostMetadata)} />;
                    })}
                </div>

                <h3 className={robertoSlab.className}>
                    Developer at The Society of Leisure Enthusiasts: September
                    2007 - May 2009
                </h3>

                <p>
                    Aided in complete redesign and development of a large luxury
                    rental home startup website. Created online marketing
                    campaigns and design projects.
                </p>

                <div
                    className="grid gap-2grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-8"
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    {societyPosts.map((post) => {
                        return <PostThumbnail {...(post as PostMetadata)} />;
                    })}
                </div>

                <h3 className={robertoSlab.className}>
                    Web Designer and Developer at Commotion: 2003 - August 2007
                </h3>

                <p>
                    Created turbulent interest in clients' products and services
                    through web and graphic design, marketing campaigns and
                    online Flash games. Led a successful creative and web
                    internship program.
                </p>

                <div
                    className="grid gap-2grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2"
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    {commotionPosts.map((post) => {
                        return <PostThumbnail {...(post as PostMetadata)} />;
                    })}
                </div>
            </div>
            <h1
                className={`text-2xl text-creamcicle mb-4 px-4 sm:px-0 ${robertoSlab.className}`}
            >
                Recommendations
            </h1>
            <div
                className="prose mb-8 post p-4 sm:p-8 rounded-md shadow-md bg-cream"
                style={{ maxWidth: 'inherit' }}
            >
                <Recommendations />

                <p>
                    <Link href="https://www.linkedin.com/in/interactiveguru/details/recommendations/?detailScreenTabIndex=0">
                        See All 18 Recommendations On LinkedIn
                    </Link>
                </p>
            </div>
            <h1
                className={`text-2xl text-creamcicle mb-4 px-4 sm:px-0 ${robertoSlab.className}`}
            >
                Additional Activity
            </h1>
            <AdditionalActivity />
        </div>
    );
}
