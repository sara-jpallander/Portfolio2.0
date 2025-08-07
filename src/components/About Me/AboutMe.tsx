import blurb1 from "../../assets/Blurb star.svg"
import engtoswe from "../../assets/Eng2swe.png"
import swetoeng from "../../assets/swe2eng.png"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import "./aboutMe.css"

export default function AboutMe() {
    const [isEng, setIsEng] = useState(true);

    return(
        <div className="about-me-container">
            <img src={blurb1} alt="Blurb 1" className="blurb1"/>
            <section className="about-me-text" id="about-me">
                <img 
                    src={isEng ? engtoswe : swetoeng} 
                    alt="language" className="lang-img"
                    onClick={() => setIsEng(!isEng)}
                />
                <h2>{isEng ? `About Me` : `Om Mig`}</h2>
                
                {isEng ?

                <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                exit={{ opacity: 0, scale: 0 }}>
                    I'm an up and coming web developer that is 
                    fascinated with good design and frontend development. 
                    My journey into tech is shaped by my background as 
                    an optician and my personal creative interests, 
                    which gives me a unique perspective on accessibility 
                    and user friendly design. <br /><br />I bring a sharp eye for 
                    detail and possess a natural understanding of beautiful yet balanced visual media. 
                    I strive to create intuitive and inclusive digital experiences, where my goal is to make technology engaging for everyone. 
                </motion.p>

                : null}

                {isEng? 
                
                null :

                                <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01],
                }}>
                    Blivande webbutvecklare som är fascinerad av att skapa bra design och få bygga det med kod. Mitt karriärbyte till tech har färgats av min bakgrund som optiker och mitt personliga intresse av det kreativa. Det har hjälpt mig få en djupare förståelse för tillgänglighet och användarvänlig design.
                    <br /><br /> Jag har ett öga för detalj och tillhandahåller en instinktiv förståelse för hur man uppnår en både estetisk och balanserad layout. Jag strävar efter att skapa en intutiv digital upplevelse, där målet är att det ska kännas engagerande för alla.
                </motion.p>
                
                }

            </section>
        </div>
    )
}