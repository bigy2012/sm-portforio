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
            <span className="capitalize font-medium text-dark/75 dark:text-white">
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
        <div className='dark:text-light'>
            <h2 className='font-bold text-8xl w-full text-center mt-10'>Experience</h2>

            <div ref={ref} className='w-[75%] mx-auto my-20 relative'>

                <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-14 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top" />

                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Detail
                        position="Full stack developer"
                        companyLink="https://ideva.co/"
                        company="ideva development"
                        time="2022-Present"
                        address=""
                        work="I am a Fullstack Developer with expertise in custom programming. My expertise lies in writing code that seamlessly connects to databases. Ensuring that the system works reliably and efficiently, I am also responsible for testing all systems to verify end-to-end flow and ensure that the overall program runs as required with maximum efficiency."
                    />
                    <Detail
                        position="Freelance"
                        companyLink="/"
                        company="Freelance"
                        time="2021-Present"
                        address=""
                        work="I am a freelance specializing in website development, bot programming, and other programming tasks."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience
