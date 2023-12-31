import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'




const Detail = ({ type, time, place, info }) => {
    const ref = useRef(null)

    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
        <LiIcon reference={ref} />
        <div>
            <h3 className="capitalize font-bold text-2xl">
                {type}
            </h3>
            <span className="capitalize font-medium text-dark/75 dark:text-white">
                {time} | {place}
            </span>
            <p className="font-medium w-full">
                {info}
            </p>
        </div>
    </li>
}

const Education = () => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className='dark:text-light'>
            <h2 className='font-bold text-8xl w-full text-center mt-10'>Education</h2>

            <div ref={ref} className='w-[75%] mx-auto my-20 relative'>

                <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-14 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top" />

                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Detail
                        type="Vocational Certificate in Information Technology."
                        time="2019-2022"
                        place="Nawamintrachini Mukdahan Vocational Education College"
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                        Intelligence."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education
