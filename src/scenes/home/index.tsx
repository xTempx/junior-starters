import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import HomePageDoodle from '@/assets/BG_vid.png';
import LineSec from '@/assets/Line.png';
import HomePageGraphic from '@/assets/Junior Starters 1080.mp4';
import ActionButton from '@/shared/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import SvgComponent from '@/shared/JuniorStartersLogo';


type Props = {
    setSelectedPage:( value: SelectedPage) => void;
};


const Home  = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    const startWeb = {
        hidden: {
          opacity: 0,
      
        },
        visible: {
          opacity: 1,
          transition: {
            default: {
              duration: 1,
              
              ease : [0.6, 0.01,0.05,0.95]
            }
          }
        }
      }; 
      


  return <motion.section
   variants={startWeb}
   initial="hidden" 
   animate="visible"
    id="home"
    className ="gap-16 bg-fixed bg-cover py-32 md:bg-center md:h-full md:pb-0 bg-[url('@/assets/BG_Sample2.png')] " 
    >
        {/**Image and Main Header */}
        <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)} >
            {/**Main Header**/}
            <div className="z-10 mt-2 md:basis-3/5">
                {/**Headings**/}
                <motion.div  className="md:-mt-20">
                    <div className="relative">
                        <motion.div className="flex justify-center before:absolute before:-top-10 before:left-10 before:z-[-1] before:-rotate-12 md:before:content-evolvetext"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once:true,amount: 0.5 }}
                            transition={{ duration: 2 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0}}}>
                        <SvgComponent className="overflow-hidden h-60 md:h-72"></SvgComponent>                        
                        </motion.div> 
                        <p className="flex justify-center mr-10 -mt-14 tracking-widest text-black font-gochihand text-lg md:text-2xl">
                            <AnimatedWords title="Jump-starting  future  achievers!"/>
                            </p>
                    </div>
                    <motion.p
                    transition={{ delay: 5.5,duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0}
                    }} 
                    className="mt-8 text-sm">
                      Junior Starters Childcare is a progressive preschool founded in 2019. JSC honors its mission in giving holistic development and opportunities to jump-start future achievers. With our wide-range of Enrichment Classes and Immersive play-based education for our Regular classes, Junior Starters will surely foster your child's love for learning.
                    </motion.p>
                </motion.div>
                {/*Actions */}
            <motion.div className="mt-8 flex item-center gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true,amount: 0.5 }}
                transition={{ delay: 6.5, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0},
                    
                }}>
                <AnchorLink
                className="mt-3 text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.AboutUs)}
                href={`#${SelectedPage.AboutUs}`}
                >        
                <p>Learn More</p>
                </AnchorLink>
                <ActionButton setSelectedPage={setSelectedPage}>
                    Sign up For Free Trial
                </ActionButton>
            </motion.div>                            
            </div>
          
            {/**Image**/}
         <div className="flex basis:3/5 justify-center md:gap-8 md:z-10
                    md:ml-10 mt-20 md:justify-items-end"
>  
                <motion.video autoPlay muted loop className="[width:45rem] border-4 border-dotted border-lime-900 rounded-full"
                    viewport={{ once:true,amount: 0.5 }}
                    transition={{ delay: 8, duration: 4, type:"spring", damping:12 ,stiffness:100 }}
                    variants={{
                        hidden: { opacity: 0, rotate: 50, scale: 0.5 },
                        visible: { opacity: 1, rotate:0, scale: 1}
                    }}>
                    <source src={HomePageGraphic} type="video/mp4"/>
                </motion.video>
                <motion.img src={HomePageDoodle} className="absolute top-44 h-auto z-[-1] "
                 transition={{ delay: 7, duration: 2, ease : [0.6, 0.01,0.05,0.95] }}
                 variants={{
                     hidden: { opacity: 0, y:-50,},
                     visible: { opacity: 1, y:0,}
                 }}/>
            </div>

        </motion.div>
        {/**Added Designs */}
        {isAboveMediumScreens && (
            <div></div>
        )}
      <img className="relative top-[8.5rem] md:top-16 w-full h-auto" src={LineSec}></img>
  </motion.section>;

};

type AnimatedWordsProps = {
    title: string;
};

const staggerChilden = {
    rest: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 5.5,        
        staggerChildren: 0.3
      }
    }
  };

  const pMotion = {
    rest: {
        y:100,
    },
    show:{
        y:0,
        transition:{
            ease : [0.6, 0.01,0.05,0.95],
            duration: 1             
        }
    }
  };

  

const AnimatedWords : React.FC<AnimatedWordsProps> = ({ title }) =>{
    return(
        <motion.span variants={staggerChilden} initial="rest" animate="show">
            {title.split (" ").map((word, idx) => (
                <div key={idx} className="inline-block overflow-hidden">
                    <motion.span className="inline-block" 
                    variants={pMotion}>
                        { word + "\u00A0"}
                        </motion.span>
                </div>
            ))}
        </motion.span>
    )
}    


export default Home;