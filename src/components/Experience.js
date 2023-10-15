import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'




const Detail = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null)

    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
        <LiIcon reference={ref} />
        <div>
            <h3 className="capitalize font-bold text-2xl">{position}&nbsp;<a href={companyLink}
                target="_blank"
                className="text-primary"
            >@{company}</a></h3>
            <span className="capitalize font-medium text-dark/75">
                {time} | {address}
            </span>
            <p className="font-medium w-full">
                {work}
            </p>
        </div>
    </li>
}

const Experience = () => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div>
            <h2 className='font-bold text-8xl w-full text-center mt-10'>Experience</h2>

            <div ref={ref} className='w-[75%] mx-auto my-20 relative'>

                <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-14 top-0 w-[4px] h-full bg-dark origin-top" />

                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Detail
                        position="Software Engineer"
                        companyLink="www.google.com"
                        company="Google"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's
                    search engine, including improving the accuracy and relevance of search results and
                    developing new tools for data analysis and visualization."
                    />
                    <Detail
                        position="Software Engineer"
                        companyLink="www.google.com"
                        company="Google"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's
                    search engine, including improving the accuracy and relevance of search results and
                    developing new tools for data analysis and visualization."
                    />
                    <Detail
                        position="Software Engineer"
                        companyLink="www.google.com"
                        company="Google"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's
                    search engine, including improving the accuracy and relevance of search results and
                    developing new tools for data analysis and visualization."
                    />
                    <Detail
                        position="Software Engineer"
                        companyLink="www.google.com"
                        company="Google"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's
                    search engine, including improving the accuracy and relevance of search results and
                    developing new tools for data analysis and visualization."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience
