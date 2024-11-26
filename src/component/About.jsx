import {imagesPath} from "../props/ImagesList.js";
import {AboutSkill} from "./AboutSkill.jsx";

export const About = () => {
    return (
        <div className='lg:h-screen h-fit w-screen flex items-center justify-center p-10 md:mt-12 mt-10 isolate scroll-smooth' id='About'>
            <div className=' md:w-[90%] bg-gray-950 h-fit text-white flex md:flex-row gap-10 flex-col p-10'>
                <div className='md:w-1/2 w-full flex items-center justify-center flex-col gap-3'>
                    <div className='flex items-center justify-center gap-5 sm:flex-row flex-col'>
                        <img src={imagesPath[1]} alt='foto diri'  className='object-contain w-[150px] h-[150px]'/>
                        <div className='md:w-3/4 w-full bg-gray-950 h-full flex flex-col gap-2'>
                            <span><b>Name: </b> Goldwin Hoxenlly</span>
                            <span><b>Email: </b> goldwinho@gmail.com</span>
                            <span><b>Phone: </b> +62895617395550</span>
                            <span><b>Github:  </b> <a href='https://github.com/Towaking' target='_blank'> Click Me</a> </span>
                        </div>
                    </div>
                    <div className='flex items-center w-full justify-center flex-col '>
                        <AboutSkill title='JAVASCRIPT' progress = '70' />
                        <AboutSkill title='HTML' progress = '70' />
                        <AboutSkill title='PYTHON' progress = '70' />
                        <AboutSkill title='REACT' progress = '60' />
                        <AboutSkill title='CSS' progress = '50' />
                        <AboutSkill title='C/C++' progress = '50' />
                        <AboutSkill title='JAVA' progress = '30' />
                    </div>

                </div>
                <div className='md:w-1/2 w-full h-full flex flex-col  h-full justify-between gap-10 mt-10'>
                    <h1 className='underline text-4xl '>About me</h1>
                    <p className='text-justify'> I am passionate about leveraging
                        technology to solve complex problems. With a
                        strong foundation in programming, data analysis,
                        and machine learning, I am well-equipped with the
                        skills necessary for roles in the IT and tech sectors.
                        I thrive in environments where I can analyze large datasets,
                        identify trends, and create models that lead to innovative solutions.
                        Additionally, my experience with coding languages such as Python
                        and JavaScript enables me to build scalable applications and optimize
                        existing systems. I have a keen interest in developing AI-driven technologies
                        and using them to create efficiencies and enhance user experiences.
                    </p>
                </div>
            </div>
        </div>
    )
}