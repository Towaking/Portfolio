import {Home} from "../component/Home.jsx";
import {About} from "../component/About.jsx";
import {ProjectDetail} from "../component/ProjectDetail.jsx";
import {Footer} from "../component/Footer.jsx";

export const Main = () => {
    return (
        <>
            <Home/>
            <About/>
            <ProjectDetail/>
            <Footer/>
        </>
    )
}