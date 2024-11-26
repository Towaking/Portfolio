import {imagesPath} from "../props/ImagesList.js";
import {useState} from "react";

export const Navbar = () => {

    const [isToggle, setIsToggle] = useState(false);

    const handleOpen = () => {
        setIsToggle((e) => !e);
    }

    return (
        <header
            className='bg-black/50 w-screen fixed top-0 left-0 right-0 z-40 text-white  flex items-center md:justify-around justify-between  p-5'>
            <a href="#Home" className=' hover:scale-110 z-40'>
                <img src={imagesPath[1]} alt='yes' className='object-center w-[50px] h-[50px] rounded-full' />
            </a>
            <di></di>
            <di></di>
            <div className="md:hidden block HAMBURGER-ICON space-y-2 z-20" onClick={handleOpen}>
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            </div>


            <div
                className={`md:gap-8 md:flex  ${isToggle ? 'flex md:relative  absolute top-full left-0 right-0 bg-black/50 md:flex-row flex-col justify-end items-end  z-20 pt-4 pb-4 pl-10 pr-10 transition-all duration-500 ease-in-out transform' : 'hidden'}`}
            >
                <a href="#Home" className="md:hover:border-b-2 hover:border-blue-500 hover:scale-110">Home</a>
                <a href="#About" className="md:hover:border-b-2 hover:border-blue-500 hover:scale-110 scroll-smooth">About</a>
                <a href="#Project" className="md:hover:border-b-2 hover:border-blue-500 hover:scale-110">Work</a>
            </div>

        </header>
    )
}