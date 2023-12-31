import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React, { useEffect, useRef } from 'react'
import ProfileBig from '../../public/images/big.png'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Edication'


const AnimateNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }

    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on('change', function (latest) {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })

    }, [isInView, value, motionValue])

    return <span ref={ref}></span>
}


const about = () => {
    return (
        <div className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Passion Big Wasan!" className='mb-16' />
                <div className='grid w-full grid-cols-8 gap-16 dark:text-light'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light'>Big Wasan</h2>
                        <p className='my-4 font-medium'>
                            Hi, I'm Big, a web Fullstack developer With 2 years of experience in the field. I am always looking for
                            new and innovative ways to bring my clients' visions to life.
                        </p>
                        <p className='my-4 font-medium'>
                            I believe that design is about more than just making things look pretty – it's about solving problems and
                            creating intuitive, enjoyable experiences for users.
                        </p>
                        <p className='my-4 font-medium'>
                            Whether I'm working on a website, mobile app. every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                        </p>
                    </div>

                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark' />
                        <Image src={ProfileBig} className="w-full h-auto rounded-2xl" />
                    </div>

                    <div className='col-span-2 flex flex-col items-end justify-between'>

                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimateNumbers value={2} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light'>Expreiane 01</h2>
                        </div>
                    </div>
                </div>

                {/* <Skills /> */}
                <Experience />
                <Education />

            </Layout>
        </div>
    )
}

export default about
