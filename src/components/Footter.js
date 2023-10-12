import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footter = () => {
    return (
        <div>
            <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
                <Layout className="py-8 flex items-center justify-between">
                    <span>{new Date().getFullYear()} &copy; All Rights.</span>
                    <Link href="/">Big</Link>
                </Layout>
            </footer>
        </div>
    )
}

export default Footter
