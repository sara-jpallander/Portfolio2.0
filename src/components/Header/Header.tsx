import Github from "../../assets/Github-star.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Slack from "../../assets/Slack-star.svg"
import Stamp from "../../assets/Stamp.svg"
import "./header.css"
/* import '../App.css' */

export default function Header() {

  return (
    <header>
        <div className="header-left">
            <div className="socials">
                <img src={Github} alt="Github" />
                <img src={Linkedin} alt="Linkedin" />
                <img src={Slack} alt="Slack" />
            </div>
            <section className="name-intro">
                <p>WELCOME  •  MY NAME IS</p>
                <h1>SARA</h1>
            </section>
        </div>

        <div className="header-right">
            {/* TODO: Add spinning animation to stamp*/}
            <img src={Stamp} alt="Stamp Logo" className="logo"/>
            <nav>
                <a href="#about-me">ABOUT ME</a>
                <a href="my-work">MY WORK</a>
                <a href="#contact">CONTACT</a>
            </nav>
        </div>
    </header>
  )
}