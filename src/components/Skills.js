import { motion } from 'framer-motion'


const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light dark:text-dark
        text-light py-3 px-6 shadow-dark cursor-pointer absolute'
            whileHover={{ scale: 1.10 }}
            inherit={{ x: 0, y: 0 }}
            animate={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
        >
            {name}
        </motion.div>
    )
}


const Skills = () => {
    return (
        <div className='dark:text-light'>
            <h2 className='font-bold text-8xl w-full text-center mt-10'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full'>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark
             text-light p-8 shadow-dark dark:text-dark dark:bg-light'
                    whileHover={{ scale: 1.10 }}
                >
                    Web
                </motion.div>

                <Skill name="Laravel" x="15vw" y="-10vw" />
                <Skill name="React" x="20vw" y="0vw" />
                <Skill name="HTML" x="-20vw" y="0vw" />
                <Skill name="CSS" x="-10vw" y="-10vw" />

            </div>
        </div>
    )
}

export default Skills
