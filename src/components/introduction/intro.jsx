import "./intro.css"
import Me from "../../images/Me.png"

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
               <div className="intro-left-wrapper">
                   <h2 className="intro-i">Hello, my name is</h2>
                   <h1 className="Intro-name">Blake Tucker</h1>
                   <div className="Intro-title">
                      <div className="Intro-title-wrapper">
                          <div className="Intro-title-item">IT Technician</div>
                          <div className="Intro-title-item">Photographer</div>
                          <div className="Intro-title-item">Front End Developer</div>
                          </div> 
                   </div>
                   <div className="intro-desc">
                    I am an IT technician, specializing in computer hardware. I am also a front end developer, who enjoys HTML, CSS, and Javascript. I have been coding for under a year, but I am very passionate about learning and improving everyday. 
                   </div>
                   </div> 
            </div>
            <div className="intro-right">
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro