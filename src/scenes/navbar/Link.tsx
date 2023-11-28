import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    classname : string,
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}
 
function Link({
    classname,
    page,
    selectedPage,
    setSelectedPage,
}: Props) {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <div className={classname}>
    <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-primary-500 border-b-2 border-gray-400 " : ""}
            transition ease-in-out duration-500 hover:text-black relative
            after:bg-black after:rounded-lg after:absolute after:h-[0.15rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer
        `}
        
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
        
    </AnchorLink>
    
    </div>
    
  )
}

export default Link