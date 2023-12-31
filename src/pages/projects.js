import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Images1 from '../../public/images/projects/crypto-screener-cover-image.jpg'


const FeaturedProjects = ({ type, title, sumary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark 
        dark:bg-dark dark:text-light dark:border-light 
        bg-light h-auto shadow-2xl p-12'>
            <Link href={link} target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{sumary}</p>

                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'> <GithubIcon /></Link>
                    <Link href={github} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'> Visit Project</Link>
                </div>
            </div>
        </article>
    )
}


const Project = ({ type, title, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border 
        dark:bg-dark dark:text-light dark:border-light 
        border-solid border-dark bg-light p-6 relative'>
            <Link href={link} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>
            </div>
            <div className='w-full mt-4 flex items-center justify-between'>
                <Link href={github} target='_blank' className='text-lg font-semibold underline'>
                    Visit
                </Link>
                <Link href={github} target='_blank' className='w-8'> <GithubIcon /></Link>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <div className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16' />

                <div className='grid grid-cols-12 gap-24'>
                    <div className='col-span-12'>
                        <FeaturedProjects
                            title="Crypto Screener Application"
                            img={Images1}
                            sumary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                            link="/"
                            github="/"
                            type="Featured Project"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="Crypto Screener Application"
                            img={Images1}
                            link="/"
                            github="/"
                            type="Featured Project"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="Crypto Screener Application"
                            img={Images1}
                            link="/"
                            github="/"
                            type="Featured Project"
                        />
                    </div>

                    <div className='col-span-12'>
                        <FeaturedProjects
                            title="Crypto Screener Application"
                            img={Images1}
                            sumary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                            link="/"
                            github="/"
                            type="Featured Project"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="Crypto Screener Application"
                            img={Images1}
                            link="/"
                            github="/"
                            type="Featured Project"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="Crypto Screener Application"
                            img={Images1}
                            link="/"
                            github="/"
                            type="Featured Project"
                        />
                    </div>
                </div>

            </Layout>
        </div>
    )
}

export default projects
