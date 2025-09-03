import "./education.css"
import chasacademy from "../../assets/logo_svart.png"
import star from "../../assets/Star 3.svg"
import skills from "./skills"

export default function Education() {
    return(
        <div className="education-container" id="skills">
            <section className="education-title">
                <img src={chasacademy} alt="Chas Academy" />
                <hr/>
                <h2>Education</h2>
            </section>

            <div className="education-info">
                <p><strong>Fullstack Javascript</strong> • Diploma</p>
                <p>Sept. 2024  —  June 2026</p>
            </div>

            <div className="tech-stack-container">
                <section className="tech-stack">
                    <h2>Tech Stack</h2>
                    <img src={star} alt="star" className="star"/>
                    <div className="indicators">
                        <div className="area-indicator fullstack">
                            <hr />
                            <p>Fullstack</p>
                        </div>
                        <div className="area-indicator frontend">
                            <hr />
                            <p>Frontend</p>
                        </div>
                        <div className="area-indicator backend">
                            <hr />
                            <p>Backend</p>
                        </div>
                    </div>
                    
                </section>
                <div className="skills-container">
                    {skills.map(skill => <p className={`skill ${skill.area}`}>{skill.name}</p>)}
                </div>
            </div>

        </div>
    )
}