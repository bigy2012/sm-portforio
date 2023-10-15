import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footter = () => {
    return (
        <div>
            <footer className='w-full border-t-2 border-solid border-dark dark:border-light  font-medium text-lg  dark:text-light'>
                <Layout className="py-8 flex items-center self-center justify-between  ">
                    <span>{new Date().getFullYear()} &copy; All Rights.</span>
                    <Link href="/">Big</Link>
                </Layout>
            </footer>
        </div>
    )
}

export default Footter
