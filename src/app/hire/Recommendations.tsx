interface Recommendation {
    name: string;
    title: string;
    company: string;
    date: string;
    relationship: string;
    recommendation: string;
    imageUrl: string;
}

const Recommendations = () => {
    const recommendationList: Recommendation[] = [
        {
            name: 'Christian Carter',
            title: 'Senior Product Strategist',
            company: 'Level20',
            date: 'April 29, 2024',
            relationship: 'Christian worked with Christopher on the same team',
            imageUrl:
                'https://media.licdn.com/dms/image/C4E03AQEhw1dvrq0n4A/profile-displayphoto-shrink_100_100/0/1582126882231?e=1720051200&v=beta&t=TZnP7V3fVgbZEM_ocmBjchVb3dZQeqOVX8ngn1yRDHM',
            recommendation: `Chris was hired onto my team to manage a complex integration/customization with Twilio Flex to support our omni-channel contact center and CRM system. Previous attempts to make significant progress in this work-stream had proved very difficult, but Chris was undaunted by the challenge. He joined our team with an palpable exuberance and managed to slice through the ambiguity with an expert precision to bring a brittle implementation up to par, thoroughly document and prototype existing and future solutions, and independently manage his work-stream with thorough and timely communication. He dramatically reduced the delivery cycle times for our new feature releases in the Twilio space in a short span of time. Some highlights of his work include our first data integration into Twilio Flex to support timely customer information, an overhaul of our IVR flow to support intelligent routing and more stable releasees, and a plethora quality enhancements at his own recommendation to support shorter cycle times for our agents and customers. If you are looking for a passionate, communicative, diligent developer who thrives equally well in collaboration and independence, then Chris will be an excellent addition to your team.`,
        },
        {
            name: 'Christopher Crawford',
            title: 'Lead Software Engineer',
            company: 'Level20',
            date: 'May 3, 2024',
            relationship: 'Christopher C. managed Christopher S. directly',
            imageUrl:
                'https://media.licdn.com/dms/image/C4E03AQEKbCO0FdsYuA/profile-displayphoto-shrink_100_100/0/1534769479928?e=1720051200&v=beta&t=HWzl-exwISH8VzaNmT0p_rWTjEsytCcciBGBqFimTEY',
            recommendation: `As the tech lead working responsible for the Twilio call center, I worked closely with Chris. His quick grasp of Twilio allowed him to enhance our Flex CRM and add needed resiliency to the overall system.

            Chris demonstrated proficiency across both front-end and back-end, integrating multiple Twilio services such as Flex, TaskRouter, and serverless functions with our internal APIs. He implemented several key improvements, including advanced customer-agent matching and enhanced context for incoming communications, which have noticeably improved key call center metrics.
            
            Twilio was not without issues -- Chris also served as an effective liaison between Twilio support and our developers, ensuring smooth communication and timely updates. His communication was always thorough and professional.
            
            Chris consistently met deadlines, driving the project forward with efficiency and focus. His technical expertise and proactive approach have been invaluable to our team. His extensive documentation will continue to serve us as we continue on.
            
            Chris would be a strong addition to any team.`,
        },
        {
            name: 'Brian Kopp',
            title: 'Senior Infrastructure Engineer',
            company: 'Bigeye',
            date: 'June 28, 2023',
            relationship:
                'Brian worked with Christopher but on different teams',
            imageUrl:
                'https://media.licdn.com/dms/image/C4E03AQGujA8mrOop_Q/profile-displayphoto-shrink_100_100/0/1517550857917?e=1720051200&v=beta&t=xpDltC7CH3y8KNWz_zxhQXpcpPQYQopjcT6i6ig_wIo',
            recommendation: `It was a privilege to work with Chris at BombBomb. He worked on a different team than mine, but I did get to work directly with him often. During his time at BombBomb, he do a great job leading his team in the midst of a lot of transition, and he demonstrated a keen attention to detail and care with some of our most complex systems. On one project, his team was tasked with maintaining and improving a particularly challenging area of our system, which they did with excellence. On another project, he led the successful migration of re-homing some mission-critical data from our database to S3 without downtime.

            Chris is curious, capable, and extremely sharp! He really was great to work with - he's kind, humble, and has a great sense of humor. I would love to work with him again in the future.
            
            Thanks for everything you did at BombBomb Chris, we'll miss you!`,
        },
        {
            name: 'Sharon Nowland',
            title: 'Software Engineer',
            company: 'Micro Key',
            date: 'June 30, 2023',
            relationship: 'Sharon reported directly to Christopher',
            imageUrl:
                'https://media.licdn.com/dms/image/C5103AQFyKkLybLFdFQ/profile-displayphoto-shrink_100_100/0/1517078210877?e=1720051200&v=beta&t=okWz1Vo1AiD7vRyJjRUw1sXisG4STV2I7RPIwcjG7Sg',
            recommendation: `During our time working together, I have had the privilege of witnessing Chris’ extraordinary intelligence and ability to understand complex code problems. His sharp analytical skills, combined with an innate talent for breaking down intricate issues into manageable components, makes him an invaluable asset to any team.

            Chris consistently demonstrates an impressive capacity to swiftly grasp new concepts and adjust his approach accordingly. His ability to think on his feet and embrace challenges head-on is truly remarkable, as well as his ability to step into any role required of him and exceed all expectations.
            
            Beyond his technical prowess, Chris is a pleasure to work with. He always has a positive attitude and a collaborative mindset, and is the first to volunteer to lend a helping hand to his teammates in any situation.
            
            In addition to his exceptional technical skills and adaptability, Chris possesses a strong work ethic and attention to detail. He consistently delivers high-quality work, ensuring that every aspect of a project is thoroughly considered and executed to perfection. His commitment to excellence serves as an inspiration to the entire team.
            
            I wholeheartedly recommend Chris to any organization in need of a talented and adaptable individual who thrives in a fast-paced environment. His intellectual acuity, problem-solving capabilities, and dedication to continuous improvement makes him an invaluable asset. I have no doubt that he will continue to achieve great things in his future endeavors, and I look forward to seeing more AI and dancing robots from him as well!`,
        },
        {
            name: 'Chad Palender',
            title: 'DevOps Leader',
            company: '',
            date: 'July 6, 2023',
            relationship: 'Chad worked with Christopher but on different teams',
            imageUrl:
                'https://media.licdn.com/dms/image/D5635AQEJwp3SWoUpiw/profile-framedphoto-shrink_100_100/0/1712760794652?e=1716811200&v=beta&t=3DszJmyWzGyX7giWCJ0SYZUS_y1RIAn3NFMWBqpNP5Q',
            recommendation: `One of the first things I worked with Chris on was a hackweek project where we had a shared idea. Chris was guiding me on a how we could implement the backend (which he already knew how to do.. but I didn't), while he was going to learn some new skills and play around with front end development. It was a great experience, and I quickly realized that Chris is a tinkerer, an experimenter, and person who wants to learn more, and a person who wants to make things better - and a great teacher, too. Chris leads quietly, through example, and shows how things are done - he does not just tell you how something should be done. His projects are fascinating, and his new blog digging deeper into AI show just how smart and curious he is. 

            Working as a Tech Lead for our main web app, Chris was instrumental in helping me lead my own team through successful projects. As an example, a major project was an Oracle to Postgres migration. Chris was able to prioritize any work handed to his team and have them execute on it quickly. This included a massive move of data out of the database into an AWS S3 bucket. His understanding of the risks, technical need, and know how to execute were all outstanding.
            
            It was a pleasure working with Chris. He taught me interesting things. He helped my team and the company execute on goals. He has a proven track record, and his light up glasses are cool. I haven't mentioned the glasses yet? Well, maybe you should reach out to Chris about those...`,
        },
        {
            name: 'Amelia Winstead',
            title: 'Senior Member of Technical Staff',
            company: 'Pinger',
            date: 'June 28, 2023',
            relationship: 'Amelia worked with Christopher on the same team',
            imageUrl:
                'https://media.licdn.com/dms/image/C4E03AQHvhI3qGI0AlA/profile-displayphoto-shrink_100_100/0/1573633066337?e=1720051200&v=beta&t=VV5PH2_0hs7r-x0_ehoWCC_Ic8fEq18LrmPgRLwCKCo',
            recommendation: `Chris is a true gem of a developer. He has innate motivation to learn and investigate new technologies, grow and understand systems, and has the ability to execute and deliver on nearly anything you send his way. I was fortunate enough to be on the same team as him while working at BombBomb for ~1 year after he was hired, and Chris was able to transition fully into his role faster than almost anyone else I've ever worked with. He is a standout developer who never fails to bring his best. Between his side projects tinkering with electronics and integrations, and his friendly approach to problem solving, anyone could learn a thing or two by getting lucky enough to get to work with Chris.`,
        },
        {
            name: 'Elizabeth Asbell',
            title: 'Senior Software Engineer',
            company: 'BombBomb',
            date: 'July 11, 2023',
            relationship: 'Elizabeth worked with Christopher on the same team',
            imageUrl:
                'https://media.licdn.com/dms/image/C5103AQH0o4kEnCIN6w/profile-displayphoto-shrink_100_100/0/1517007928030?e=1720051200&v=beta&t=qGxfyThzjvvYcWaC-YnOfwFazp2HWf7qmf3awq1eB9g',
            recommendation: `Although I worked directly with Chris for only a short time, I admired his work from afar for the two and half years we were at BombBomb together. I saw him move into a leadership position on his team, gracefully leading their complex work of securing private videos. His attention to detail in this important work lead to an iron-strong system that gained the respect of the entire company. I had the privilege of witnessing his determination and innovative thinking.

            Once I began working directly with Chris, I became privy to the kind, thoughtful, and inquisitive man he is. It was a pleasure to work with Chris, he brought fun to our daily stand-ups and jumped in headfirst when any of us needed a second pair of eyes. I have no hesitation in recommending him not only for his exemplary work but his positive attitude and willingness to go the extra mile.`,
        },
        {
            name: 'Scott Nuismer',
            title: 'Owner and Therapist',
            company: 'Hope Heals Counseling, LLC',
            date: 'December 4, 2016',
            relationship: "Scott was Christopher's client",
            imageUrl:
                'https://media.licdn.com/dms/image/C5103AQEfHdIsJ2nJAA/profile-displayphoto-shrink_100_100/0/1516970278827?e=1720051200&v=beta&t=QagvdpnsH_QrqrtamB72breGAdmcM3ouvvVUobmL3e8',
            recommendation: `Chris designed our business website (hopetherapy.info). He did a great job at making the website beautiful, clean, SEO friendly, mobil friendly, and much more. He thought of every little detail and made sure the user experience was the best it could be. In addition to his talent, Chris is also just a great guy. I took lots of extra time to walk me through how to manage the website with edits, backups, google analytics, and more. I cannot recommend Chris highly enough!`,
        },
        {
            name: 'Shane Macomber',
            title: 'Owner',
            company: 'Shane Macomber Photography',
            date: 'May 5, 2009',
            relationship: "Shane was Christopher's client",
            imageUrl:
                'https://media.licdn.com/dms/image/C5603AQHsrKMtFhMDlg/profile-displayphoto-shrink_100_100/0/1517755921235?e=1720051200&v=beta&t=8PBDmraLmm7WFyerbgNwQqaHq4m9YS7NjmvIFtCl2bc',
            recommendation: `Working with Chris Stevens while he designed my website was a truly fantastic experience! As a photographer, I had a strong vision of how I wanted my images displayed, but that was about all I knew. There were many design and functionality elements I needed help deciding on. Chris’s experience with a diverse clientel was a huge advantage to me as his client and to the design of my website. It made it possible to design a site that is attractive to and user-friendly for the companies I want to reach. It is a huge confidence builder when I approach new clients. My website is, hands down, my number one tool of advertisement and marketing. I now, also have the ability to update the images on my site through an easy, straight-forward uploading system Chris created. This is truly priceless. Without this ability I would be spending tons of money to have someone else update my site. Chris set no limits on the design of my website. It could be as simple or complex as I wanted it to be. Chris never tried to overdesign the site, taking away from my images. The best part of working with Chris was his ability to really listen to what I wanted, add to my vision, and then put it all together in a really wonderful way. I would highly recommend Chris for your project, whether it be a completely new website or a redesign. Thanks again Chris, Shane Shane Macomber Photography www.shanemacomber.com`,
        },
        {
            name: 'Michael McFadden',
            title: 'President',
            company:
                'eAccountable | Growth Leader | ex-Ogilvy/WPP | eCommerce | CX | Digital Transformation',
            date: 'April 27, 2009',
            relationship:
                "Michael was senior to Christopher but didn't manage Christopher directly",
            imageUrl:
                'https://media.licdn.com/dms/image/D5603AQHtz6PqchWBdQ/profile-displayphoto-shrink_100_100/0/1706428012590?e=1720051200&v=beta&t=9uBtNwlCl_pno6PbbHzvDdrMOy2liATj2fK0A0f4z9w',
            recommendation: `Chris is a creative rock star. He is always thinking of new, innovative ways to reach consumers, yet he is much more than just a creative guru. He works relentlessly to achieve the goals set before him and he is always learning new programs and tinkering with technology. He's a pleasure to work with and will accomplish much in his career.`,
        },
        {
            name: 'Scott Berkley',
            title: 'Principal | PwC Global CIO',
            company: 'Enterprise Applications',
            date: 'April 22, 2009',
            relationship: 'Scott managed Christopher directly',
            imageUrl:
                'https://media.licdn.com/dms/image/C4E03AQFmpCIrcW25NA/profile-displayphoto-shrink_100_100/0/1563054243393?e=1720051200&v=beta&t=qr7AqcUmcSndyGQ9SgKkvurzDrdSE5QY93H4HqZkP9Q',
            recommendation: `Chris is by far one of the most creative and talented developers i have ever worked with. He can wear many hats and has a incredible work ethic. I feel very lucky to have had the opportunity to manage him.`,
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-8 mb-8">
            {recommendationList.map((recommendation) => {
                return (
                    <div className="md:flex">
                        <img
                            src={recommendation.imageUrl}
                            alt={recommendation.name}
                            className="rounded-full mr-4 w-[100px] h-[100px]"
                        />
                        <div className="flex-1">
                            <h4 className="m-0 p-0">{recommendation.name}</h4>
                            <div className="m-0 p-0">
                                <em>
                                    {recommendation.title}
                                    {recommendation.company
                                        ? `, ${recommendation.company}`
                                        : ''}
                                </em>
                            </div>
                            <div className="m-0 p-0">
                                <em>
                                    {recommendation.date},{' '}
                                    {recommendation.relationship}
                                </em>
                            </div>
                            <>
                                {recommendation.recommendation
                                    .split(/(?:\r\n|\n)+/)
                                    .map((paragraph, index) => (
                                        <p
                                            className={
                                                index === 0 ? 'mt-0' : ''
                                            }
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                            </>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Recommendations;
