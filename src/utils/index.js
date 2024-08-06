import social from "../assets/images/social.png";
import blog from "../assets/images/blog.png";
import studynotion from "../assets/images/studynotion.png";
import insta from "../assets/images/insta.png";
import rezorpay from "../assets/images/rezorpay.png";
import pen from "../assets/images/pen.png";

export const headlines = [
    "Hi, I'm Tushar.",
    "I'm a Software Developer",
    "Over the past few years, I've immersed myself in building and scaling backend websites while actively tackling frontend challenges."
];

export const fixedNavItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Projects" },
    { name: "Contact" }
]

export const projects = [
    {
        title: 'StudyNotion - Ed-Tech',
        image: studynotion,
        linkGithub: 'https://github.com/bjclayton/SkyCast',
        linkOnline: 'https://frontend-studynotion.onrender.com/',
        description: 'A comprehensive ed-tech platform built with the MERN stack, featuring user authentication, course management, and advanced analytics for student performance.',
        techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'RESTful API', 'JavaScript', 'Tailwind CSS']
    },
    {
        title: 'Social',
        image: social,
        linkOnline: null,
        linkGithub: null,
        description: 'A feature-rich social media platform developed using React.js and Node.js, offering real-time chat, user profiles, and interactive feeds to enhance user engagement.',
        techStack: ['Socket.IO', 'MongoDB', 'Express.js', 'React.js', 'RESTful API', 'JWT', 'CSS']
    },
    {
        title: 'CodeHelp-Blogs',
        image: blog,
        linkGithub: 'https://github.com/TusharMinche/Blogs-Website',
        linkOnline: 'https://blogs-website-mocha.vercel.app/',
        description: 'A dynamic platform for creating, managing, and reading blogs, built to enhance user engagement and content management.',
        techStack: ['React', 'Tailwind CSS', 'Context API']
    },
    {
        title: 'Rezorpay UI Clone',
        image: rezorpay,
        linkGithub: 'https://github.com/TusharMinche/Razorpay-UI-Clone',
        linkOnline: 'https://razerpay-clone.vercel.app/',
        description: 'A user interface clone of Razorpay, demonstrating proficient skills in front-end development and design replication.',
        techStack: ['HTML', 'Tailwind CSS']
    },
];

export const skillsWork = [
    'MongoDB',
    'Express.js',
    'React.js',
    'Node.js',
    'Redux',
    'JavaScript',
    'TailwindCSS',
    'C++',
    'SQL',
    'NoSQL',
    'RESTful API'
];

export const certificates = [
    'DSA',
    'Web-Dev',
    'C++',
];

export const metadata = {
    title: "Tushar Mahesh Minche",
    description: "This portfolio is a collection of my work that showcases my skills and creativity.",
    imageURL: "../assets/images/profile.webp",
    pageUrl: "https://www.johnclaytonblanc.com"
};
