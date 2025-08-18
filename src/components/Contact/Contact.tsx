import "./contact.css"
import blurb3 from "../../assets/Blurb 3.png"
import star from "../../assets/Star 4.svg"
import slack from "../../assets/slack-svgrepo-com.svg"
import linkedin from "../../assets/linkedin-round-svgrepo-com.svg"
import email from "../../assets/love-letter-with-heart-svgrepo-com 1.svg"


export default function Contact() {
    return(
        <footer className="contact-container" id="contact">
            <img src={blurb3} alt="blurb3" className="blurb3"/>

            <div className="contact-content">
                <div className="contact-title">
                    <img src={star} alt="star" />
                    <hr />
                    <h2>Contact</h2>
                    <hr />
                    <img src={star} alt="star" />
                </div>

                <div className="contact-links">
                    <a href="https://chasacademy.slack.com/team/U07KBQGTUMT" target="blank">
                        <img src={slack} alt="slack" />
                    </a>

                    <span>|</span>
                    
                    <a href="https://www.linkedin.com/in/sara-j-pallander-3644a1249/" target="blank">
                        <img src={linkedin} alt="linkedin" />
                    </a>

                    <span>|</span>
                    <img src={email} alt="email" />
                    <p className="email-adress">sara.j.pallander@gmail.com</p>
                
                </div>

                <p className="footer-text">Sara J. Pallander <span>•</span> 2025 <span>|</span> Designed and built with love.</p>
            </div>
        </footer>
    )
}