import React from 'react'
import { SelectedPage } from "@/shared/types";
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import divider from '@/assets/edge-blue.svg';
import useMediaQuery from "@/hooks/useMediaQuery";
import curImg from "@/assets/imgCur.png";
import schImg from "@/assets/school.png"

type Props = {
        setSelectedPage: (value: SelectedPage) => void;
};

const OurCurriculum = ({setSelectedPage}: Props) => {
const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

  const startCur = {
    hidden: {
      opacity: 0,
      filter: "blur(20px)"
  
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        default: {
          duration: 1,
          
          ease : [0.6, 0.01,0.05,0.95]
        }
      }
    }
  };
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1,

      }
    }
  };

  const linkItems = {
    hidden: { 
      opacity: 0,
      x:-150, 
      filter: "blur(20px)"

    },
    show: { 
      opacity: 1,
      x:0,
      filter: "blur(0px)",
      transition:{
        duration:1,
        ease:[0.6, 0.01,0.05,0.95]
      }
    }
  };

  return (
    <motion.section id="ourcurriculum" className="relative mx-auto min-h-full w-full bg-[#cce1eb] py-36"
    variants={startCur}
    initial="hidden" 
    animate="visible"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurCurriculum)}>

      <div className="absolute -top-[8.94rem] w-[120%] h-10 z-[-1] pb-36 rotate-180 bg-contain bg-no-repeat  bg-[url('@/assets/edge-blue.svg')]">
       </div>


       <motion.div
        className="text-justify">
            <motion.div className="pt-10 px-10 md:px-52 flex flex-col justify-center pb-10">
                <motion.img src={schImg} className="absolute h-44 -mt-52 left-28 -translate-y-32 sm:-translate-y-9 sm:mt-5 sm:-top-10 md:left-52 sm:h-52"
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true,amount: 0.5 }}
                transition={{ duration: 2 }}
                variants={{
                    hidden: { opacity: 0, scale: 0.4 },
                    visible: { opacity: 1, scale: 1}}}/>
                <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true,amount: 0.5 }}
                transition={{ duration: 2 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0}}}>
                    <HText>OUR CURRICULUM</HText>
                </motion.span>

                <motion.img src={curImg} className="mt-5 absolute -top-5 right-32 h-64 sm:visible invisible"
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true}}
                transition={{ duration: 2.5, delay: 1 }}
                variants={{
                    hidden: { opacity: 0, scale: 0.4, rotate: 180 },
                    visible: { opacity: 1, scale: 1, rotate: 0}}}
                />
            </motion.div>
            <motion.div className="justify-between px-10 md:px-52 text-sm md:text-lg"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once:true,amount: 0.5 }}>
                <motion.p variants={linkItems} className="pb-6 md:before:content-stem md:before:absolute md:before:-translate-x-44">
                Junior Starters follows an eclectic approach that combines the beneficial aspects of traditional and progressive approach in one curriculum. Our curriculum is composed of English and Math Literacy, Mandarin, Physical Education, and Cultural & General Knowledge. As the school aims for holistic growth and development, it also provides extra-curricular activities and events to flourish the child’s behavior and socialization.
                </motion.p>
                <motion.p variants={linkItems} className="pb-6 md:before:content-abc md:before:absolute md:before:-right-40">
                  For our English Literacy, we also apply the Jolly Phonics method which is a UK based curriculum that is widely used to effectively teach children reading and grammar not just in Europe but also for non English speaking countries. It is a fun and child centered approach, teaching literacy through synthetic phonics. With actions for each of the 42 letter sounds, the multi-sensory method is very motivating for children.
                </motion.p>
                <motion.p variants={linkItems} className="pb-6 md:before:content-dna md:before:absolute md:before:-translate-x-44">
                  For our Cultural and General Knowledge, It is a subject that aims to broaden our student's knowledge about the things that surrounds them. As we discuss certain topics on this subject, All classes follows a Child- centered Approach along with Project-based Learning wherein students plays an active role in the class discussion and teachers facilitates the learning by providing different teaching styles and techniques in accordance to the interests of the students. Moreover, Junior Starters reinforce Experiential Learning in the lessons through giving art activities, STEM experiments, collaborative activities, field work, and events that will be valuable application in real-life situations.                    
                </motion.p>
            </motion.div>
       </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default OurCurriculum