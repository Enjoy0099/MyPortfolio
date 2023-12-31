import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from "../hoc"

const ServiceCard = ({index, title, icon}) => {
  return(
    // <Tilt className="xs:w-[250px] w-full">
    <Tilt className="xs:w-[250px] w-full transition-all">
      <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
          <div
            options = {{
              max: 45, 
              scale: 1,
              speed: 450
            }}
            className=' bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img
             src={icon} alt={title} className=' w-16 h-16 object-contain'/>
             <h3 className=' text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("","", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      I am a passionate game programmer with a diverse range of project experiences. My core skill set encompasses gameplay programming, game design, Figma, Blender, Krita, and UI/UX design. I am proficient in working with game engines such as Unity and Unreal, which allows me to create immersive and enjoyable gaming experiences. My drive to continuously strive for excellence and push the boundaries of what's possible in gaming fuels my passion and excitement, ultimately leading to my dedication to creating exceptional games. 🚀
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 place-content-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")