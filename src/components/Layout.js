import Head from "next/head"

const Layout = ({ children, className }) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32  dark:bg-dark  ${className}`}>
      <Head>
        <title>Big Wasan</title>
      </Head>
      {children}
    </div>
  )
}

export default Layout
