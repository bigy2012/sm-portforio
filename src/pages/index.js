import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import ProfileBig from '../../public/images/big.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import Footter from '@/components/Footter'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex items-center text-dark w-full min-h-full'>
      <Layout>
        <div className='flex items-center justify-between w-full'>
          <div className='w-1/2'>
            <Image src={ProfileBig} alt="Big Wasan" className='w-full h-auto' />
          </div>
          <div className='1/2 flex flex-col items-start self-center '>

            <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-6xl' />

            <p className='my-4 text-base font-medium'>
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
              Explore my latest projects and articles, showcasing my expertise in React.js and web development.
            </p>
            <div className='flex items-center self-start mt-2'>

              <Link href="/dummy.pdf" target={"_blank"}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg font-semibold
              hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark'
                download={true}
              >Resume
                <LinkArrow />
              </Link>

              <Link href="mailto:wasaniy121@gmail.com" target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark underline'
              >
                Contact
              </Link>

            </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}
