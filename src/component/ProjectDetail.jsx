import {ProjectCard} from "./ProjectCard.jsx";
import {projectList} from "../props/projectList.js";

export const ProjectDetail = () => {
    return (
        <div className='md:h-fit p-10 md:mt-12  isolate scroll-smooth h-full w-screen flex justify-center items-center' id='Project'>
            <div className='md:w-5/6 w-fit h-full text-white bg-gray-950 flex flex-col gap-8 items-center justify-center p-5'>
                <span className='md:text-5xl text-3xl'>Project</span>
                <div className='sm:grid md:grid-cols-3 sm:gap-6 sm:w-full p-5 sm:grid-cols-2 flex flex-col gap-10 md:w-[90%] w-fit'>
                    {projectList.map((project) => (
                        ProjectCard(project)
                    ))}
                </div>
            </div>
        </div>
    )
}