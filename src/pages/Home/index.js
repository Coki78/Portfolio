import Banner from "../../components/Banner"
import Experiences from "../../components/Experiences"
import Footer from "../../components/Footer"
import NavBar from "../../components/Navbar"
import Portfolio from "../../components/Portfolio"
import Skills from "../../components/Skills"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'
import "./style.css"

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Banner/>
            {/* <Experiences/> */}
            <Skills/>
            <Portfolio/>
            <Footer/>
        </div>
    )
}

export default Home