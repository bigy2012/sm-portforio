import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { GithubIcon, MoonIcon, SunIcon, FaceBook } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hook/useThemeSwitcher'


const CustomLink = ({ href, title, className = '' }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`
            h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full 
            transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-light
            `}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group`} onClick={handleClick}>
            {title}

            <span className={`
            h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full 
            transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-light
            `}>&nbsp;</span>
        </button>
    )
}

const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState();

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between first-letter:
        dark:text-light relative
        '>

            <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>


            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href="/" title="Home" className='mr-4' />
                    <CustomLink href="/about" title="About" className='mx-4' />
                    <CustomLink href="/projects" title="Projects" className='ml-4' />
                </nav>
            </div>

            {
                isOpen ?
                    <div className='m-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 text-light rounded-lg backdrop-blur-md py-32 px-96'>
                        <nav className='flex items-center flex-col justify-center'>
                            <CustomMobileLink href="/" title="Home" className='mr-4' toggle={handleClick} />
                            <CustomMobileLink href="/about" title="About" className='mx-4' toggle={handleClick} />
                            <CustomMobileLink href="/projects" title="Projects" className='ml-4' toggle={handleClick} />
                        </nav>
                    </div>
                    : null
            }


            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>

            <nav className='flex items-center justify-end w-full flex-wrap'>
                <motion.a href="https://github.com/bigy2012" target={"_blank"}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-8 mr-3'
                >
                    <GithubIcon />
                </motion.a>
                <motion.a href="https://www.facebook.com/wasaniy121A/" target={"_blank"}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}

                    className='w-8 mr-3'
                >
                    <FaceBook />
                </motion.a>

                <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className={`rounded-full p-1 w-[35px] ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                >
                    {
                        mode === "dark" ?
                            <SunIcon className={"fill-dark"} />
                            :
                            <MoonIcon className={"fill-dark"} />

                    }
                </button>


            </nav>
        </header>
    )
}

export default Navbar
