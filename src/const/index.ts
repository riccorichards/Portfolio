//certificates
import advNode from "../assets/certificates/advNode_screen.jpg";
import advEx from "../assets/certificates/advEx_screen.jpg";
import PatternDesign from "../assets/certificates/pattern_screen.jpg";
import ms from "../assets/certificates/ms_screen.jpg";
import secure from "../assets/certificates/security_screen.jpg";

//teches
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoSass,
} from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import {
  SiRedux,
  SiTypescript,
  SiMysql,
  SiExpress,
  SiRabbitmq,
  SiPostgresql,
  SiMongodb,
  SiMongoose,
  SiSequelize,
  SiTailwindcss,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";

//product images
import CLI_thumnail from "../assets/projectGallery/CLI-thumnail.jpg";
import AI_thumnail from "../assets/projectGallery/AI_thumnail.jpg";
import JOB_thumnail from "../assets/projectGallery/JOB_thumnail.jpg";
import You_Thumnail from "../assets/projectGallery/You_Thumnail.jpg";
import Old_Thumnail from "../assets/projectGallery/old_Thumnail.jpg";

export const certificates = [
  { id: 1, source: advNode },
  { id: 2, source: advEx },
  { id: 3, source: PatternDesign },
  { id: 4, source: ms },
  { id: 5, source: secure },
];

export const techStack = [
  { id: 1, title: "HTML", source: IoLogoHtml5, color: "#e34c26" },
  { id: 2, title: "CSS", source: IoLogoCss3, color: "#2965f1" },
  { id: 3, title: "JavaScript", source: IoLogoJavascript, color: "#f0db4f" },
  { id: 4, title: "Sass", source: IoLogoSass, color: "#cc6699" },
  { id: 5, title: "React", source: IoLogoReact, color: "#61DBFB" },
  { id: 6, title: "TypeScript", source: SiTypescript, color: "#3178c6" },
  { id: 7, title: "Redux", source: SiRedux, color: "#764abc" },
  { id: 8, title: "MySQL", source: SiMysql, color: "#4479a1" },
  { id: 9, title: "Express", source: SiExpress, color: "#000000" },
  { id: 10, title: "RabbitMQ", source: SiRabbitmq, color: "#FF6600" },
  { id: 11, title: "PostgreSQL", source: SiPostgresql, color: "#336791" },
  { id: 12, title: "MongoDB", source: SiMongodb, color: "#47A248" },
  { id: 13, title: "Mongoose", source: SiMongoose, color: "#800000" },
  { id: 14, title: "Sequelize", source: SiSequelize, color: "#52B0E7" },
  { id: 15, title: "Node.js", source: FaNode, color: "#68A063" },
  { id: 16, title: "Tailwind", source: SiTailwindcss, color: "aqua" },
];

export const projects = [
  {
    id: 1,
    title: "TaskMasterCLI",
    url: "https://task-master-cli.vercel.app/",
    thumnail: CLI_thumnail,
    gallery: [],
    desc: "Welcome to CLI Task Master, your next-generation task management and learning optimization tool. Designed for developers, learners, and productivity enthusiasts, CLI Task Master combines task tracking with insightful analytics to propel your daily productivity and learning journey to new heights.",
    readme:
      "https://github.com/riccorichards/TaskMasterCLI/blob/main/README.md",
  },
  {
    id: 2,
    title: "AI-Promot Generator",
    url: "https://ai-prompts-next-js.vercel.app/",
    thumnail: AI_thumnail,
    gallery: [],
    desc: "Introducing AI-Prompt Generator, a dynamic platform designed to fuel your creativity with a wide array of prompts, powered by the latest AI technology. Whether you're a writer seeking inspiration, a teacher looking for educational prompts, or just curious, AI-Prompt Generator provides an endless stream of creativity at your fingertips.",
    readme:
      "https://github.com/riccorichards/AI-Prompts-NextJS/blob/main/README.md",
  },
  {
    id: 3,
    title: "Jobs List",
    url: "https://job-list-mocha.vercel.app/",
    thumnail: JOB_thumnail,
    gallery: [],
    desc: "Welcome to DreamJob Finder, the ultimate platform connecting job seekers with their next career opportunity and enabling hiring managers to discover top talent. Built with the latest web technologies, DreamJob Finder simplifies the job search and posting process, making it easier than ever to find or fill positions across various industries and locations.",
    readme: "https://github.com/riccorichards/Job-list/blob/main/README.md",
  },
  {
    id: 4,
    title: "Youtube Clone",
    url: "https://you-tube-clone-kappa-three.vercel.app/",
    thumnail: You_Thumnail,
    gallery: [],
    desc: "N/A",
    readme: "N/A",
  },
  {
    id: 5,
    title: "Old Portfolio",
    url: "https://old-portfolio-self.vercel.app/",
    thumnail: Old_Thumnail,
    gallery: [],
    desc: "N/A",
    readme: "N/A",
  },
];

export const plans = {
  name: "Next Six Month",
  children: [
    {
      name: "Blockchain",
      children: [
        {
          name: "Blockchain Fundamentals",
          children: [
            { name: "Definition and Structure" },
            { name: "Decentralization" },
            { name: "Transparency and Immutability" },
          ],
        },
        {
          name: "Cryptography",
          children: [
            { name: "Hash Functions" },
            { name: "Public and Private Keys" },
          ],
        },
        {
          name: "Smart Contracts",
          children: [
            { name: "Definition and Operations" },
            { name: "Ethereum" },
          ],
        },
        {
          name: "Consensus Mechanisms",
          children: [
            { name: "Purpose and Types" },
            { name: "Network Agreement" },
          ],
        },
        {
          name: "Blockchain Protocols and Platforms",
        },
        {
          name: "Development Tools and Languages",
          children: [
            {
              name: "Languages",
              children: [
                { name: "Solidity for Ethereum smart contracts" },
                { name: "Python for scripting" },
                { name: "JavaScript for dApp development" },
              ],
            },
            {
              name: "Frameworks and Libraries",
              children: [
                { name: "Truffle" },
                { name: "Hardhat" },
                { name: "Web3.js" },
                { name: "ethers.js" },
              ],
            },
          ],
        },
        {
          name: "Decentralized Applications (dApps)",
          children: [
            { name: "Architecture and Design" },
            { name: "Development Process" },
          ],
        },
        {
          name: "Tokenomics",
          children: [
            { name: "Tokens and Cryptocurrencies" },
            { name: "Economics and Utility" },
          ],
        },
        {
          name: "Regulatory and Ethical Considerations",
          children: [{ name: "Compliance" }, { name: "Ethics" }],
        },
        {
          name: "Blockchain Security",
          children: [{ name: "Common Vulnerabilities" }, { name: "Ethics" }],
        },
      ],
    },
    {
      name: "Python",
      children: [
        {
          name: "Basic",
          children: [
            { name: "Variable & Data Types" },
            { name: "Type Casting, Exceptions" },
            { name: "Functions, Buildin Funtions" },
            { name: "Lists, Tuples, Sets, Dictionaries" },
          ],
        },
        {
          name: "Data Structures & algs",
          children: [
            { name: "Arrays and Linked Lists" },
            { name: "Heaps, Stacks and Queues" },
            { name: "Hash Tables" },
            { name: "Binary Search Trees" },
            { name: "Recursion" },
            { name: "Sorting Algorithms" },
          ],
        },
        {
          name: "Advanced Topics",
          children: [
            { name: "Iterators" },
            { name: "RegEx" },
            { name: "Decorators" },
            { name: "Lambdas" },
            {
              name: "OOP",
              children: [
                { name: "Classes" },
                { name: "Inheritance" },
                { name: "Methods, Dunder" },
              ],
            },
            {
              name: "Modules",
              children: [{ name: "Builtin" }, { name: "Custom" }],
            },
            {
              name: "Package Managers",
              children: [{ name: "PyPI" }, { name: "Pip" }, { name: "Conda" }],
            },
            {
              name: "Others",
              children: [
                { name: "List Comprehensions" },
                { name: "Generator Expressions" },
                { name: "Paradigms" },
              ],
            },
          ],
        },
        {
          name: "Learn a Framework",
          children: [
            {
              name: "Synchronous",
              children: [
                { name: "Django" },
                { name: "Flask" },
                { name: "Pyramid" },
              ],
            },
            { name: "FastAPI" },
            {
              name: "Asynchronous",
              children: [
                { name: "gevent" },
                { name: "aiohttp" },
                { name: "Tornado" },
                { name: "Sanic" },
              ],
            },
          ],
        },
        {
          name: "Testing",
          children: [
            { name: "doctest" },
            { name: "nose" },
            { name: "pytest" },
            { name: "unittest/pyUnit" },
          ],
        },
      ],
    },
  ],
};
