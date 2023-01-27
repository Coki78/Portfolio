import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import './skills.css'
import { ImHtmlFive } from "react-icons/im";
import { SiJavascript, SiMysql, SiReact, SiTailwindcss } from "react-icons/si";
import { BsGithub, BsBootstrapFill } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      
    return(
        <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="">
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div >
                              <h3><ImHtmlFive/></h3>
                              <h4>HTML</h4>
                            </div>
                            <div >
                              <h3><BsBootstrapFill/></h3>
                              <h4>Bootsrap</h4>
                            </div>
                            <div >
                              <h3><SiJavascript/></h3>
                              <h4>JS</h4>
                            </div>
                            <div >
                              <h3><SiMysql/></h3>
                              <h4>MySQL</h4>
                            </div>
                            <div >
                              <h3><SiReact/></h3>
                              <h4>React Js</h4>
                            </div>
                            <div >
                              <h3><FaNodeJs/></h3>
                              <h4>Node Js</h4>
                            </div>
                            <div >
                              <h3><BsGithub/></h3>
                              <h4>Github</h4>
                            </div>
                            <div >
                              <h3><SiTailwindcss/></h3>
                              <h4>Tailwind CSS</h4>
                            </div> 
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left"  alt="Image" />
    </section>
    )
}

export default Skills