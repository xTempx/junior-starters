import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import AboutUs from "@/scenes/aboutus";
import OurPrograms from "@/scenes/ourprograms";
import OurCurriculum from "@/scenes/ourcurriculum";
import SvgLoader from  "@/shared/Loaders";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

function App() {
  const [loading , setLoading] = useState(false);  
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  
  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    }, 9000)
  }, []);

  useEffect(() => {
    const handleScroll = () =>{
      if (window.scrollY === 0) {
          setIsTopOfPage(true); 
          setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return() => window.removeEventListener("scroll", handleScroll);
    },[]); 
  return (
      <div className="app bg-gray-20">
        {
          loading ?
          
          <SvgLoader className="h-screen w-96 max-w-2xl mx-auto pb-10 flex justify-center z-50" />
          
          :

        
        <><Navbar
            isTopOfPage={isTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage} 
            />
            <Home setSelectedPage={setSelectedPage} />
            <AboutUs setSelectedPage={setSelectedPage} />
            <OurCurriculum setSelectedPage={setSelectedPage} />
            <OurPrograms setSelectedPage={setSelectedPage} />
            </>
      }
     </div>

  )
}

export default App
