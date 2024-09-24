import type { TNavLink, TService, TTechnology, TExperience, TProject } from '../types';

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
  mongodb,
  java,
  python,
  nextjs,
  kali,
  archlinux,
  php,
  amazon,
  // tictactoe,
  // sps,
  weather,
  loginp,
  shellScript,
  notepad,
  react_todo,
  digency,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'project',
    title: 'Project',
  },
  {
    id: 'CERTIFICATE',
    title: 'Certificate',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Full Stack Developer',
    icon: web,
  },
  {
    title: 'Web Developer',
    icon: mobile,
  },
  {
    title: 'Frontend React Native Developer',
    icon: backend,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'C',
    icon: c,
  },
  {
    name: 'C++',
    icon: cpp,
  },
  {
    name: 'JAVA',
    icon: java,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Scripting',
    icon: shellScript,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Kali Linux',
    icon: kali,
  },
  {
    name: 'Archlinux',
    icon: archlinux,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'php',
    icon: php,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Data Science Intern - IBM SkillBuild',
    companyName: 'IBM',
    icon: ibm2,
    iconBg: '#383E56',
    date: 'June 2023 - Aug 2023',
    points: [
      'Remote Project - Lung Cancer Analysis Project Team',
      'Skills Developed - Data Analytics and Data Visualization',
      'Skills Developed - Data Fundamentals using Python and Spark Fundamentals with Hadoop',
    ],
  },
  {
    title: 'Data Science Intern',
    companyName: 'Mouktik Consulting Services',
    icon: mouktic,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Feb 2023',
    points: ['Machine Learning', 'Data Visualization', 'Data Cleaning'],
  },
];

const projects: TProject[] = [
  {
    name: 'Notepad Text-Editor ',
    description:
      "This is a simple text editor built using Java.The file operations (open/save) are implemented using Java's File and FileWriter classes, while the graphical user interface (GUI) is created using Swing components like JTextArea, JMenuBar, and JFileChooser. This project demonstrates basic file handling and GUI programming in Java.",
    tags: [
      {
        name: 'JAVA',
        color: 'blue-text-gradient',
      },
      {
        name: 'Javaswing',
        color: 'green-text-gradient',
      },
    ],
    image: notepad,
    sourceCodeLink: 'https://github.com/pratibhasingh47/NotePad-Text-Editor-inJAVA.git',
  },
  {
    name: 'Digital-Agency React Website',
    description:
      "A modern, responsive digital agency website built using React, featuring a sleek design with light and dark themes. The website offers smooth navigation and is optimized for all devices. It highlights the agency's services, portfolio, and contact options, providing an engaging user experience with seamless theme switching.",
    tags: [
      {
        name: 'ReactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'green-text-gradient',
      },
    ],
    image: digency,
    sourceCodeLink: 'https://github.com/pratibhasingh47/digital_agency_React-Website.git',
  },
  {
    name: 'React Todo-List',
    description:
      "This is a simple and interactive To-Do List built using React and JavaScript. The app allows users to add, edit, delete, and mark tasks as complete. State management is handled using React's useState and useEffect hooks, ensuring a dynamic user experience. The project demonstrates core React concepts like component-based architecture, event handling, and the use of JavaScript array methods for task management.",
    tags: [
      {
        name: 'ReactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'green-text-gradient',
      },
    ],
    image: react_todo,
    sourceCodeLink: 'https://github.com/pratibhasingh47/react_todolist_app.git',
  },
  {
    name: 'Weather-App',
    description:
      'The Simple Weather App is a lightweight web application that allows users to check the current weather conditions of any location worldwide. Built using JavaScript Fetch API for fetching weather data from a weather API provider, and styled with HTML and CSS, the app provides a clean and intuitive user interface for a seamless experience.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: weather,
    sourceCodeLink: 'https://github.com/pratibhasingh47/weather_app_javascript.git',
  },
  {
    name: 'Registration Form',
    description:
      'The User Registration Page is a foundational component of web applications, providing users with the ability to sign up for new accounts or log in to existing ones. Developed using JavaScript for client-side interactivity and form validation, and styled with HTML and CSS for a visually appealing interface, this registration page offers a seamless and secure experience for users.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: loginp,
    sourceCodeLink: 'https://github.com/pratibhasingh47/basic_Signin-Signup_page.git',
  },
  {
    name: 'Amazon-Clone',
    description:
      'Amazon - Clone is a basic project developed from HTML & CSS. While creating this project I learnt complete functionality of web pages.Also it help me to smoothly clear my Web Page Design Fundamentals. I learnt about many CSS properties',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
    ],
    image: amazon,
    sourceCodeLink: 'https://github.com/pratibhasingh47/HTML-CSS-amazon_clone',
  },
  //   {
  //     name: 'Tic-Tac-Toe Game',
  //     description:
  //       'Everybody once in there life has played Tic-Tac-Toe. This mini-project involve many useful concept of javascript fundamentals about how the user interact with website also it increses the understanding of more design concept and developed logical thinking. ',
  //     tags: [
  //       {
  //         name: 'HTML',
  //         color: 'blue-text-gradient',
  //       },
  //       {
  //         name: 'CSS',
  //         color: 'green-text-gradient',
  //       },
  //       {
  //         name: 'Javascript',
  //         color: 'pink-text-gradient',
  //       },
  //     ],
  //     image: tictactoe,
  //     sourceCodeLink: 'https://github.com/pratibhasingh47/tic_tac_toe',
  //   },
  //   {
  //     name: 'Stone-Paper-Scissor Game',
  //     description:
  //       " Stone Paper Scissor game using DOM manipulation and JavaScript's random function!. This mini-project challenged me to think creatively and apply JavaScript concepts in a fun and engaging way",
  //     tags: [
  //       {
  //         name: 'HTML',
  //         color: 'blue-text-gradient',
  //       },
  //       {
  //         name: 'CSS',
  //         color: 'green-text-gradient',
  //       },
  //       {
  //         name: 'Javascript',
  //         color: 'pink-text-gradient',
  //       },
  //     ],
  //     image: sps,
  //     sourceCodeLink: 'https://github.com/pratibhasingh47/Stone-paper-scissor',
  // ,}
];

export { services, technologies, experiences, projects };
