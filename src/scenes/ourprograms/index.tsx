import React, { useState } from 'react';
import { SelectedPage } from "@/shared/types";
import { motion, AnimatePresence  } from 'framer-motion';
import imgToddler from "@/assets/Program_Toddler.png";
import imgJrNursery from "@/assets/Junior_Nursery.png";
import imgSrNursery from "@/assets/Senior_Nursery.png";
import imgKinder from "@/assets/Kinder.png";
import waves from "@/assets/waves.png";
import HText from '@/shared/HText';

const images = [
 imgToddler,
 imgJrNursery,
 imgSrNursery,
 imgKinder,
];
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurPrograms = ({setSelectedPage}: Props) => {
  var [imageIndex, setImageIndex] = useState(0);

 const changeImage = (position: number) => {
    imageIndex = position;
    setImageIndex(imageIndex); 
 };

 const variants = {
  enter:{
      x: -250,
      opacity: 0,

  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
        duration: 1,
        ease : [0.6, 0.01,0.05,0.95]
    },
  },
  exit: {
      opacity: 0
  
  },
};

 return (
  <motion.section id="ourprograms" className="mx-auto min-h-full py-20 bg-cover bg-[url('@/assets/wave-haikei.svg')]"

  initial="hidden" 
  animate="visible"
  >
  <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurPrograms)}>    
    <div className="items-center justify-between h-screen">
      <div className="mt-8 grid grid-col-1 gap-y-2 gap-x-6  md:ml-44 sm:grid-cols-2 sm:ml-8 sm:gap-y-8 xs:ml-2 ">
        <div className="col-span-1 sm:col-span-2">
          <HText>Our Programs</HText>
        </div>
        <div className="row-span-6 sm:col-span-1" >
          <motion.img
            src={images[imageIndex]}
            alt={`Image ${imageIndex}`}
            className="object-contain w-fit h-96 md:h-[36rem] sm:max-w-full "
            key={imageIndex}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"

          />
        </div>
        <div>
        </div>

          <button
            className="sm:-rotate-3 ml-[15%] sm:ml-[10%] w-80 h-16 sm:w-72 sm:h-16 text-center shadow-xl rounded-lg border-2 border-red-700 bg-[#58bfc6]  text-white  hover:bg-yellow-500"
            onClick={() => changeImage(0)}
          >
            TODDLERS
          </button>
          <button
            className="sm:rotate-3 ml-[15%] sm:ml-[10%] w-80 h-16 sm:w-72 sm:h-16 text-center shadow-xl rounded-lg border-2 border-red-700 bg-[#58bfc6]  text-white  hover:bg-yellow-500"
            
            onClick={() => changeImage(1)}
          >
            JUNIOR NURSERY
          </button>
          <button
            className="sm:-rotate-3 ml-[15%] sm:ml-[10%] w-80 h-16 sm:w-72 sm:h-16 text-center shadow-xl rounded-lg border-2 border-red-700 bg-[#58bfc6]  text-white  hover:bg-yellow-500"
            onClick={() => changeImage(2)}
          >
            
            SENIOR NURSERY
          </button>

          <button
            className="sm:rotate-3 ml-[15%] sm:ml-[10%] w-80 h-16 sm:w-72 sm:h-16 text-centershadow-xl rounded-lg border-2 border-red-700 bg-[#58bfc6]  text-white  hover:bg-yellow-500"
            onClick={() => changeImage(3)}
          >        
            PRE-KINDER
          </button>
      </div>
      <div className="mt-12 md:ml-36 text-center items-center justify-between gap-10 md:mt-12 md:flex md:flex-row">
      <p className = "bg-js-red-text w-40 font-bold text-2xl">Fun Fridays!</p>
      <p>In Junior Starters, we value our student's happiness and socio-emotional development. Every Friday we hold events in order for our students to have a chance to enjoy and interact with each other through themed activities and games. Events such as these will definitely boost your child's enthusiasm for school.</p>
      <img src={waves}/>
    </div>

    </div>
    </motion.div>    
</motion.section>    
 );
};

export default OurPrograms;