import taskly from "../../assets/taskly.png"
import nextract from "../../assets/nextract.webp"
import oldportfolio from "../../assets/oldportfolio.png"
import jobchaser from "../../assets/jobchaser.png"
import webshop from "../../assets/webshop.png"
import placeholder from "../../assets/placeholder-169.png"


type Project = {
    img: string;
    title: string;
    deployLink?: string;
    description: string;
    githubLink: string;
}

const projects: Project[] = [
    {
        img: taskly,
        title: "Taskly",
        deployLink: "https://u05-taskly.netlify.app/",
        description: "A to-do list built using Typescript. Let's you add a task, edit it, mark as finished or just delete it. The data is saved in local storage.",
        githubLink: "https://github.com/sara-jpallander/Taskly"
    },

    {
        img: nextract,
        title: "Nextract",
        deployLink: "https://chasacademy.se/job/grupp-5-nextract",
        description: "A tool to simplifiy extracting data from API:s in an easy to use interface. Built in a big team of students ranging from DevOps to UX/UI designers and fullstack developers.",
        githubLink: "https://github.com/sara-jpallander/Nextract"
    },

    {
        img: oldportfolio,
        title: "Portfolio",
        deployLink: "https://oldportfolioex.netlify.app/",
        description: "[OLD] Portfolio created as a school project. Built in vanilla Javascript, HTML and CSS with the help of the Github API. Adjusts dark or light-mode according to device settings.",
        githubLink: "https://github.com/sara-jpallander/Portfolio"
    }, 

    {
        img: jobchaser,
        title: "Jobchaser",
        deployLink: "https://u07-jobchaser.netlify.app//",
        description: "First project built with React, utilizing a sign up & login feature. Responsive design & dark mode adjustable by the click of a button.",
        githubLink: "https://github.com/sara-jpallander/JobChaser"
    },

    {
        img: webshop,
        title: "Webshop",
        deployLink: "https://moasjogren.github.io/u04/",
        description: "Webshop mockup built as a group project, where you can filter through products and go to checkout. Vanilla Javascript, CSS & HTML.",
        githubLink: "https://github.com/moasjogren/u04"
    }

/*     {
        img: placeholder,
        title: "Test",
        description: "Understanding the common laptop screen resolutions and their corresponding pixel counts empowers users to choose the best option that aligns with their specific requirements and budget constraints.",
        githubLink: "test"
    }, */
]

export default projects;