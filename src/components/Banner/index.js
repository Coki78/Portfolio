import './banner.css'
import { BsArrowRightCircle } from "react-icons/bs";
import { useEffect, useState } from 'react';
import astronaut from "../../assets/astronaut.png"

const Banner = () => {

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Frontend Developer", "Web Developer"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const periode = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        },delta)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updateText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true)
            setDelta(periode)
        } else if(isDeleting && updateText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }
    return(
        <section className="banner" id="home">
            <div className="container-banner">
                <div className='card-banner'>
                    <h1>Welcome to my Portfolio</h1>
                    <h2>{"Hi I'm Dimas Rizki P"}</h2>
                    <h2>{text}</h2>
                    {/* <p>About</p> */}
                    <a href='#skills'>
                       <button className="" onClick={() => console.log('connect')}> Let's Go <BsArrowRightCircle/></button>
                    </a>
                    < a href='https://drive.google.com/file/d/121fuxQF1oohDdwmsB0Ou0qldpL30OP5A/view?usp=sharing'>
                        <button> Download CV</button>
                    </a>
                    
                </div>
                <div className='astronaut'>
                    <img src={astronaut} alt="header img"/>
                </div>
            </div>
        </section>
    )
}

export default Banner