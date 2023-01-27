import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import './skills.css'

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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div ><h4>HTML</h4></div>
                            <div ><h4>CSS</h4></div>
                            <div ><h4>JS</h4></div>
                            <div ><h4>MySQL</h4></div>
                            <div ><h4>React Js</h4></div>
                            <div ><h4>Node Js</h4></div>
                            <div ><h4>Github</h4></div>
                            <div ><h4>Tailwind</h4></div> 
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