import GithubIcon from "../../assets/Github-star.svg" 
import open from "../../assets/open-in-new-svgrepo-com.svg"
import "./myWork.css";
import { motion, useScroll } from "motion/react"

type CardProps = {
    img: string;
    title: string;
    deployLink?: string;
    description: string;
    githubLink: string;
}

const Card: React.FC<CardProps> = ({ img, title, deployLink, description, githubLink }) => {
    const { scrollYProgress } = useScroll()

    return (
        <motion.div className="card"
            id="scroll-indicator"
            style={{ opacity: scrollYProgress }}>
            <img src={img} alt="preview" className="card-img"/>
            <section className="card-info">
                {deployLink ? 
                <a href={deployLink} target="blank" className="title-link">
                    <h3 className="card-title">{title}</h3>
                    <img src={open} alt="Open in new window" width={24}/>
                </a> 
                :
                <h3 className="card-title">{title}</h3>
            }
                <p className="card-description">{description}</p>
            </section>
            <a href={githubLink} target="blank" className="card-github"><img src={GithubIcon} alt="github" /></a>
        </motion.div>
    );
};

export default Card;