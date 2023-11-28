import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: ( value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
    return (
    <AnchorLink
        className="rounded-md px-6 py-2 bg-primary-500 text-white hover:scale-110 hover:bg-indigo-500 duration-300 "
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
        >
            {children}
    </AnchorLink>
        )
    }
export default ActionButton