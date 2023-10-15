import Link from 'next/link'
import React from 'react'
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

const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher();

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between first-letter:
        dark:text-light
        '>
            <nav>
                <CustomLink href="/" title="Home" className='mr-4' />
                <CustomLink href="/about" title="About" className='mx-4' />
                <CustomLink href="/projects" title="Projects" className='ml-4' />
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
            <nav className='flex items-center justify-center flex-wrap'>
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
