import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { HomeIcon,AcademicCapIcon, UserGroupIcon } from "@heroicons/react/20/solid";
import MissionImage  from '@/assets/Mission2.png';
import VisionImage  from '@/assets/Vision.png';
import { motion } from 'framer-motion';
type Props = {
    setSelectedPage: (value : SelectedPage) => void;
};

const AboutUs = ({ setSelectedPage }: Props) => {
  
  const abtanim = {
    hidden: {
      opacity:0,
      y:50
    },
    visible: {
      opacity: 1,
      y:0,
      transition: {
          duration: 1,
          delay:0.5,
          ease : [0.6, 0.01,0.05,0.95]
      }
    }
  }; 

  const imgAnim = {
    hidden: {
      opacity:0,
      x:-150,
      scale:0.4
    },
    visible: {
      x:0,
      opacity: 1,
      scale:1,
    }
  };
  
  const descAnim = {
    hidden: {
      opacity:0,
      x:150  
    },
    visible: {
      opacity: 1,
      x:0
    }
  };

  const descAnimVis = {
    hidden: {
      opacity:0,
      x:-150  
    },
    visible: {
      opacity: 1,
      x:0
    }
  };
  

  return (
    <section
    id="aboutus"
    className="mx-auto min-h-full w-9/12 py-20">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)} 
        >
            {/*Header AboutUs*/}
            <motion.div className="mb-10 md:my-5 md:my-3/5 after:absolute after:mt-20 after:transition-transform md:after:content-plane md:-ml-30 md:after:-translate-x-16"
              variants={abtanim}
              initial="hidden"
              whileInView="visible"
              viewport={{ once:true,amount: 0.5 }}  
              >
                <HText> LEARN MORE ABOUT US</HText>
            </motion.div>
        {/* Graphics and Descript */}
          <div className="items-center justify-between gap-10 md:mt-12 md:flex">

            {/* Added images */}
            <motion.img
              className="object-contain ml-4 mr-auto md:h-[26rem] max-w-full"
              alt="Junior-starters-Image"
              variants={imgAnim}
              initial="hidden"
              whileInView="visible"
              viewport={{ once:true,amount: 0.5 }}  
              transition={{ 
                delay: 0.5,           
                duration: 2,
                ease : [0.6, 0.01,0.05,0.95]}}
              
              src={MissionImage}
            />
              {/* Description */}
              <motion.div className="mx-4 md:mx-16 text-center"
              variants={descAnim}
              initial="hidden"
              whileInView="visible"
              viewport={{ once:true,amount: 0.5 }}
              transition={{ 
                delay: 0.5,           
                duration: 2,
                ease : [0.6, 0.01,0.05,0.95]}}  
              >
                {/* Title */}
                <div className= "relative before:-top-16 before:-right-44 before:absolute md:before:content-sun">
                  <div className="before:-top-24 before:z-[1] before:content-doodle">
                      <HText>
                        Mission
                      </HText>
                  </div>
                </div>
                {/* Mission Desc*/}
                <div className=" after:content-waves after:absolute md:after:translate-x-[-145%] ">
                  <p className="my-5">Our mission is to provide quality early childhood experience through innovative and educational programs that cultivate strong values and building of character. We aim to address every child’s unique learning style and at the same time maximize each child’s potential.
                  </p>
                </div>
              </motion.div>
          </div>

          {/*Vision*/}

           {/* Graphics and Descript */}
          <div className="py-16 flex flex-col-reverse items-center justify-between gap-10 md:mt-12 md:flex md:flex-row">

              {/* Description */}
              <motion.div className="mx-4 md:mx-16 text-center"
              variants={descAnimVis}
              initial="hidden"
              whileInView="visible"
              viewport={{ once:true,amount: 0.5 }}
              transition={{ 
                delay: 0.5,           
                duration: 2,
                ease : [0.6, 0.01,0.05,0.95]}} >
                {/* Title */}
                <div className= "relative before:-top-20 before:-left-16 before:absolute md:before:content-rainbow">
                  <div className="before:-top-24 before:z-[1] before:content-doodle2">
                    <div className="">
                      <HText>
                        Vision
                      </HText>
                    </div>
                  </div>
                </div>
                {/* Mission Desc*/}
                <div className=" after:content-waves2 after:absolute after:translate-x-[45%] ">
                  <p className="my-5">We envision developing a new generation of learners who thrive and approach life with unwavering resiliency, curiosity, and imagination.
                  </p>
                </div>
              </motion.div>

               {/* Added images */}
            <motion.img
              className="object-contain ml-4 mr-auto md:h-[26rem] max-w-full"
              alt="Junior-starters-Image"
              src={VisionImage}
              variants={imgAnim}
              initial="hidden"
              whileInView="visible"
              viewport={{ once:true,amount: 0.5 }}  
              transition={{           
                duration: 2,
                ease : [0.6, 0.01,0.05,0.95]}}
              
            />
            <motion.span className="before:absolute before:z-[1] before:-translate-x-12 before:-mt-36 md:before:content-heart"
              variants={imgAnim}
              initial="hidden"
              whileInView="visible"
              viewport={{ once:true,amount: 0.5 }}  
              transition={{ 
                delay: 0.5,           
                duration: 2,
                ease : [0.6, 0.01,0.05,0.95]}}></motion.span>
          </div>
        
        </motion.div>
       
    </section>
    
  );
}

export default AboutUs;