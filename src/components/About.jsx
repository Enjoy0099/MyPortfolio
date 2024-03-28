import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from "../hoc"

const ServiceCard = ({title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full transition-all">
      
      <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
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
      </div>
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
        className='mt-4 text-secondary text-[17px] max-w-full leading-[30px]'
      >
      Hi there, I'm <span className='text-green-500 text-[19px]' style={{fontWeight:'bold'}}>Trada Kevin</span>, a gameplay programmer dedicated to crafting captivating gaming experiences. I relish the daily challenges of game development, driving me to excel.
      </motion.p>

      <motion.p variants={fadeIn("","", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-full leading-[30px]'
      >
      I've actively contributed to healthcare, kids', and personal games in the entertainment industry, Since 2023. My journey began with a 4-month internship at Galanto Innovations.
      </motion.p>

      <motion.p variants={fadeIn("","", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-full leading-[30px]'
      >
      I've spearheaded the development of 10+ games and 20+ prototypes, proving my knack for bringing ideas to life. As a gameplay programmer, I'm recognized for my quick thinking and adaptability, thriving in dynamic environments. 🚀
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