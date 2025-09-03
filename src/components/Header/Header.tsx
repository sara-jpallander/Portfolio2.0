import Github from "../../assets/Github-star.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Slack from "../../assets/Slack-star.svg"
/* import Stamp from "../../assets/Stamp.svg" */
import Text from "../../assets/curve text.svg"
import Star from "../../assets/Star 1.svg"
import menu from "../../assets/menu.svg"
import { useState } from "react";
import "./header.css"

export default function Header() {
    
    const [isClicked, setIsClicked] = useState(false);

  return (


    <header>
        <div className="header-content">
            <div className="header-left">
                <div className="socials">
                    <a href="https://github.com/sara-jpallander" target="blank"><img src={Github} alt="Github" /></a>
                    <a href="https://www.linkedin.com/in/sara-j-pallander-3644a1249/" target="blank"><img src={Linkedin} alt="Linkedin" /></a>
                    <a href="https://chasacademy.slack.com/team/U07KBQGTUMT" target="blank"><img src={Slack} alt="Slack" /></a>
                </div>
                <section className="name-intro">
                    <p>WELCOME <span>•</span> MY NAME IS</p>
                    <h1>SARA</h1>
                </section>
            </div>

            <div className="header-right">
                {/* TODO: DONE Add spinning animation to stamp*/}
                {/* <img src={Stamp} alt="Stamp Logo" className="logo"/> */}
                <div className="logo-container">
                    <img src={Text} alt="Stamp Logo" className="logo"/>
                    <img src={Star} alt="Stamp logo" className="logo-star"/>
                </div>
                
                <img onClick={ () => setIsClicked(!isClicked)} src={menu} alt="hamburger menu" width={42} className="menu-icon"/>

                <nav className={isClicked ? "nav mobile-nav clicked" : "nav mobile-nav" }>
                    <a href="#about-me">ABOUT ME</a>
                    <a href="#my-work">MY WORK</a>
                    <a href="#skills">SKILLS</a>
                    <a href="#contact">CONTACT</a>
                </nav>
            </div>
        </div>
    </header>
  )
}