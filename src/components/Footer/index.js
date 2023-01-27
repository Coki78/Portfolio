import './footer.css'
import { BsWhatsapp,BsGithub,BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
const Footer = () => {
    return(
        <section className="footer" id="footer">
            <div className="container-footer">
                <div className='row'>
                    <div className='footer1'>
                        {/* <div><a href='#experiences'>Experiences</a></div> */}
                        {/* <div><a href='#educations'>Educations</a></div> */}
                        <div><a href='#skills'>Skills</a></div>
                        <div className='icon-home'><a href='#home'><FaRegArrowAltCircleUp/></a></div>
                        <div><a href='#portfolio'>Portfolio</a></div>
                        {/* <div><a href='#contact'>Contact</a></div> */}
                    </div>
                    <div className='footer2 icon-footer'>
                        <div><a href='https://www.whatsapp.com/'><BsWhatsapp/></a> </div>
                        <div><a href='http://mail.google.com'><AiOutlineMail/></a></div>
                        <div><a href='https://github.com/DimasRP'><BsGithub/></a></div>
                        <div><a href='https://www.linkedin.com/in/dimasrp/'><BsLinkedin/></a></div>
                    </div>
                    <div className='copyright'>
                        <p>©2023 - Dimas RP</p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Footer