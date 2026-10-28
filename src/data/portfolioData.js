import {  FaCloudSun , FaIdBadge ,FaJava  ,FaCubes ,FaNodeJs ,FaLaptopCode ,FaAirbnb  } from 'react-icons/fa';
import { FaBagShopping ,FaKey ,FaListCheck ,FaCalculator ,FaClock  } from "react-icons/fa6";
import { IoQrCodeSharp } from "react-icons/io5";
import { BsFillMusicPlayerFill } from "react-icons/bs";


export const personalInfo = {
  name: "Prince Patel",

  role: "Full Stack Web Developer",

  email: "pp2079058@gmail.com",

  phone: "+91 7610579483",

  location: "Bhopal, India",

  linkedin:
    "https://www.linkedin.com/in/prince-patel-239568358/",

  github:
    "https://github.com/Prince-patel-83",

  resume: "/resume.pdf",

  summary:
    "Full Stack Web Developer with a strong foundation in MERN, Java, DSA and modern web development. Experienced in building responsive web applications, REST APIs, authentication systems and AI-powered projects."
};


export const skills = {
  languages: [
    "Java",
    "JavaScript",
    "SQL"
  ],

  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Redux",
    "Tailwind CSS",
    "Bootstrap"
  ],

  backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Authentication",
    "CRUD"
  ],

  databases: [
    "MongoDB",
    "MySQL"
  ],

  core: [
    "DSA",
    "OOP",
    "Exception Handling"
  ],

  tools: [
    "Git",
    "GitHub",
    "Postman",
    "VS Code",
    "IntelliJ IDEA"
  ]
};

export const certifications = [
  {
    title: "Java Certification",
    subtitle: "Sheryians Coaching Institute",
    icon: FaJava 
  },
  {
    title: "DSA Certificate",
    subtitle: "Sheryians Coaching Institute",
    icon: FaCubes
  },
    {
    title: "NPTEL Programming in Java",
    icon: FaJava 
  },
  {
    title: "MERN Full Stack Developer Certification",
    icon: FaNodeJs 
  },

  {
    title: "200+ LeetCode DSA Problems",
    subtitle: "Solved using Java",
    icon: FaLaptopCode 
  }
];

export const education = [
  {
    year: "2023 - 2027",

    degree: "B.Tech",

    institute:
      "Sagar Institute of Research and Technology, Bhopal",

    result: "CGPA: 7.65 / 10"
  },

  {
    year: "2023",

    degree: "Class XII",

    institute: "MP Board",

    result: "86.6%"
  },

  {
    year: "2021",

    degree: "Class X",

    institute: "MP Board",

    result: "94%"
  }
];

export const projects = [
    { 
    icon: BsFillMusicPlayerFill   ,
    title: "Moody Player",
    description:
      "An AI-powered music player that detects user emotions through facial expressions and provides personalized music recommendations.",
    technologies: [
      "MERN",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AI"
    ],
    github: "",
    live: ""
  },
  {
    icon: FaAirbnb   ,
    title: "Airbnb Website Clone",
    description:
      "A full-stack property listing and booking platform inspired by Airbnb with authentication, authorization, reviews and booking workflows.",
    technologies: [
      "MERN",
      "React",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    github: "",
    live: ""
  },
    {
      icon: FaIdBadge,
      title: "Portfolio Website",
      description:
        "Built a modern portfolio website with interactive UI, animated components, and project showcase sections to highlight my full-stack development skills.",
      technologies: ["HTML", "CSS", "Bootstrap" , "JavaScript" , "React"],
      github: "",
      live:"",
    },
    {
      icon: FaCloudSun,
      title: "Weather Application",
      description:
        "A responsive weather application that displays real-time weather data using API integration, featuring auto-location detection, city search, and dynamic UI updates.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Fetch API",
      ],
      github:"",
      live:"",
    },
    {
      icon: FaBagShopping ,
      title: "E-Commerce Web App",
      description:
        "Developed the frontend of an e-commerce application using HTML, CSS, and JavaScript, featuring product display, cart functionality, and responsive design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github:"",
      live:"",
    },
    {
      icon: IoQrCodeSharp,
      title: "QR-Code Generator",
      description:
        "Built a QR code generator with real-time rendering, enabling users to convert text or links into scannable QR codes.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github:"",
      live:"",
    },
    {
      icon: FaKey ,
      title: "Random Password Generator",
      description:
        "Developed a password generator using JavaScript, allowing users to create strong passwords with different combinations of characters.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github:"",
      live:"",
    },
    {
      icon: FaListCheck ,
      title: "To-do Application",
      description:
        "Built a To-do application with real-time task management, supporting add, edit, and delete operations using JavaScript and DOM manipulation.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github:"",
      live:"",
    },
    {
      icon: FaCalculator ,
      title: "Calculator Application",
      description:
        "Built a dynamic calculator application using JavaScript, supporting real-time calculations and demonstrating DOM manipulation and event handling.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github:"",
      live: "",
    },
    {
      icon: FaClock  ,
      title: "TimeZone Explorer",
      description:
        "A dynamic web app that fetches and displays real-time date and time based on selected country using API integration and JavaScript.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Fetch API",
      ],
      github: "",
      live: ""
    },
  
  ];