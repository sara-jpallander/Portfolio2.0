import taskly from "../../assets/taskly.png"
import nextract from "../../assets/nextract.webp"
import oldportfolio from "../../assets/oldportfolio.png"

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
        description: "A tool to simplifiy extracting data from API:s in an easy to use interface. Built in a big team of students ranging from DevOps to UX/UI designers and fullstack developers.",
        githubLink: "https://chasacademy.se/job/grupp-5-nextract"
    },

    {
        img: oldportfolio,
        title: "Portfolio",
        deployLink: "https://almostsara.netlify.app/",
        description: "[OLD] Portfolio created as a school project. Built in vanilla Javascript, HTML and CSS with the help of the Github API. Adjusts dark or light-mode according to device settings.",
        githubLink: "https://github.com/sara-jpallander/Portfolio"
    }
]

export default projects;