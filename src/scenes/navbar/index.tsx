import { useEffect, useState } from "react";
import Logo from "@/assets/png/Icon.png";
import LogoFull from "@/assets/png/JuniorStarters_Logo_Option2.png";
import { Squash as Hamburger } from 'hamburger-react'
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import {motion, AnimatePresence } from "framer-motion";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "py-8" : "bg-primary-100 drop-shadow py-3";
    const logoIcon = isTopOfPage ? Logo : LogoFull;
    const logoSize = isTopOfPage ? "h-20 max-w-xs" : "h-16 max-w-xs -ml-4";

    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,

        }
      }
    };
    const linkItems = {
      hidden: { 
        opacity: 0,
        scale: 0.8, 
        filter: "blur(20px)"

      },
      show: { 
        opacity: 1,
        scale:1,
        filter: "blur(0px)",
        transition:{
          duration:0.9,
          ease:[0.6, 0.01,0.05,0.95]
        }
      }
    };

    const item={
      exit: {
        opacity:0,
        height:0,
        transition:{
          ease: "easeInOut",
          duration: 0.3,
          delay:0.2
        }
      }
    };

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1060) {
          setIsMenuToggled(false);

        }
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);    

  return <nav>
    <div 
        className={`${navbarBackground} ${flexBetween} transition-all fixed top-0 z-30 w-full`}
      >
        <div className={`${flexBetween} mx-auto w-11/12`}>
            <div className={`${flexBetween} w-full gap-6`}> 
              {/* LEFT SIDE */}
              <img className={`${logoSize}`} alt="logo" src={`${logoIcon}`} />
              
              {/* RIGHT SIDE */}
              {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}> 
                <div className={`${flexBetween} gap-8 text-sm`}>
                  
                </div>
                <div className={`${flexBetween} gap-16 text-xl text-blue-950 font-dekko`}>
                  <Link classname='text-js-red-text' page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  <Link classname="text-js-orange-text" page="About Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  <Link classname="text-js-yellow-text" page="Our Curriculum" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  <Link classname="text-js-green-text" page="Our Programs" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  <Link classname="text-js-blue-text" page="Branches" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  <Link classname="text-js-purple-text" page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                </div>
              </div>) : (
                     <Hamburger toggled={isMenuToggled} toggle={setIsMenuToggled} />
                     
              )}
            </div>
        </div>
    </div>

    
    {/* Mobile Menu Modal */}
    <AnimatePresence> 
    {!isAboveMediumScreens && isMenuToggled && (
      <motion.div className= "animate-fade-down fixed top-24 right-0 bottom-0 z-30 h-80 w-full bg-primary-100 rounded-2xl"
      variants={item}
      initial={{height:0,opacity:0}}
      animate={{height:"28rem",opacity:1}}
      transition={{duration:0.3}}
      exit="exit"
      >        
         
                <motion.div className="relative right-12 py-8 flex flex-col gap-10 text-2xl text-right text-js-color-bg font-dekko"
                variants={container}
                initial="hidden"
                animate="show"
                >
                  <motion.span variants={linkItems}><Link classname="text-js-red-text" page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/></motion.span>
                  <motion.span variants={linkItems}><Link classname="text-js-orange-text" page="About Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/></motion.span>
                  <motion.span variants={linkItems}><Link classname="text-js-yellow-text" page="Our Curriculum" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/></motion.span>
                  <motion.span variants={linkItems}><Link classname="text-js-green-text" page="Our Programs" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/></motion.span>
                  <motion.span variants={linkItems}><Link classname="text-js-blue-text" page="Branches" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/></motion.span>
                  <motion.span variants={linkItems}><Link classname="text-js-purple-text" page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/></motion.span>
                </motion.div>                     
      </motion.div>
            
    )}
     </AnimatePresence>           
    </nav>;  
};

export default Navbar;