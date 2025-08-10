import "./myWork.css";
import Card from "./Card"
import blurb2 from "../../assets/Blurb 2.svg"
import star from "../../assets/Star 4.svg"
import projects from "./projects"

export default function MyWork() {
    return (
        <div className="my-work-container">
            <img src={blurb2} alt="blurb 2" className="blurb2"/>
            <section className="my-work-title" id="my-work">
                <h2>My Work</h2>
                <hr/>
                <img src={star} alt="star" />
            </section>
            <div className="cards-container">
                {projects.map(project => <Card 
                    img={project.img} 
                    title={project.title} 
                    description={project.description} 
                    deployLink={project.deployLink} 
                    githubLink={project.githubLink}/>)}
            </div>
        </div>
    );
};