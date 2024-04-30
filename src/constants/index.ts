import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  ibm2,
  mouktic,
  c,
  cpp,
  python,
  nextjs,
  yarn,
  archlinux,
  amazon,
  tictactoe,
  sps,
  weather,
  loginp,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "CERTIFICATE",
    title: "Certificate",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies: TTechnology[] = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Yarn",
    icon: yarn,
  },
  {
    name: "Archlinux",
    icon: archlinux,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences: TExperience[] = [
  {
    title: "Data Science Intern - IBM SkillBuild",
    companyName: "IBM",
    icon: ibm2,
    iconBg: "#383E56",
    date: "June 2023 - Aug 2023",
    points: [
      "Remote Project - Lung Cancer Analysis Project Team",
      "Skills Developed - Data Analytics and Data Visualization",
      "Skills Developed - Data Fundamentals using Python and Spark Fundamentals with Hadoop",
    ],
  },
  {
    title: "Data Science Intern",
    companyName: "Mouktik Consulting Services",
    icon: mouktic,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Machine Learning",
      "Data Visualization",
      "Data Cleaning",
    ],
  },
];


const projects: TProject[] = [
  {
    name: "Amazon-Clone",
    description:
      "Amazon - Clone is a basic project developed from HTML & CSS. While creating this project I learnt complete functionality of web pages.Also it help me to smoothly clear my Web Page Design Fundamentals. I learnt about many CSS properties",
    tags: [
      {
        name: "HTMl",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    sourceCodeLink: "https://github.com/pratibhasingh47/HTML-CSS-amazon_clone",
  },
  {
    name: "Tic-Tac-Toe Game",
    description:
      "Everybody once in there life has played Tic-Tac-Toe. This mini-project involve many useful concept of javascript fundamentals about how the user interact with website also it increses the understanding of more design concept and developed logical thinking. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tictactoe,
    sourceCodeLink: "https://github.com/pratibhasingh47/tic_tac_toe",
  },
  {
    name: "Stone-Paper-Scissor Game",
    description:
      " Stone Paper Scissor game using DOM manipulation and JavaScript's random function!. This mini-project challenged me to think creatively and apply JavaScript concepts in a fun and engaging way",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: sps,
    sourceCodeLink: "https://github.com/pratibhasingh47/Stone-paper-scissor",
  },
  {
    name: "Weather-App",
    description:
      "The Simple Weather App is a lightweight web application that allows users to check the current weather conditions of any location worldwide. Built using JavaScript Fetch API for fetching weather data from a weather API provider, and styled with HTML and CSS, the app provides a clean and intuitive user interface for a seamless experience.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Registration Form",
    description:
      "The User Registration Page is a foundational component of web applications, providing users with the ability to sign up for new accounts or log in to existing ones. Developed using JavaScript for client-side interactivity and form validation, and styled with HTML and CSS for a visually appealing interface, this registration page offers a seamless and secure experience for users.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: loginp,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences,projects };
