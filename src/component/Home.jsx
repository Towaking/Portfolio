import { imagesPath } from "../props/ImagesList.js";

export const Home = () => {
    return (
        <div className="relative " id='Home'>
            <div
                className="w-full md:h-screen h-[75dvh] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: `url(${imagesPath[0]})`,
                }}
            >
                <div className='flex items-center justify-center  gap-6 h-full w-full backdrop-brightness-50 text-white flex-col'>
                    <h1 className='md:text-7xl sm:text-5xl text-xl font-bold  mt-32 md:mt-0'>I am Goldwin Hoxenlly</h1>
                    <p className="md:text-xl sm:text-sm text-xs mt-4 md:w-1/2 w-[90%] text-center">
                        A passionate engineer dedicated to crafting elegant solutions
                        for complex problems. With a love for technology and innovation,
                        I turn ideas into reality.
                    </p>
                    <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Learn More About Me
                    </button>
                </div>
            </div>

        </div>

    )
}