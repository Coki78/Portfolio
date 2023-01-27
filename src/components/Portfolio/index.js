import './portfolio.css'
import binar from "../../assets/binar-rental-car.jpg"
const Portfolio = () => {
    return(
        <section className="portfolio" id="portfolio">
            <div className="container">
                <div className="row">
                        <h2>Portfolio</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <div className='cards'>
                            <div className="card-portfolio">   
                                <div className="card-img">
                                    <img src={binar} alt="header img"/>
                                </div>
                                <div className=" card-info">
                                </div>
                                <div className=" card-button">
                                    <a href="https://challange-platinum-binar.vercel.app/">
                                        <button>View Demo</button>
                                    </a>
                                </div>
                            </div>
                            <div className="card-portfolio">   
                                <div className="card-img">
                                    <img src={binar} alt="header img"/>
                                </div>
                                <div className=" card-info">
                                </div>
                                <div className=" card-button">
                                    <a href="https://challange-platinum-binar.vercel.app/">
                                        <button>View Demo</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        </section>
    )
}

export default Portfolio