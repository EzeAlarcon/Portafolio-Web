// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";


import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Software Developer",
    firstName: "Ezequiel",
    LastName: "Alarcon",
    btnText: "Download CV",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of experience in software development.",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Netcore",
        para: "Netcore 6 7 8 Backend Development",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Creation of Backend and Frontend services",
        logo: nodejs,
      },
      {
        name: "SpringBoot",
        para: "Creating Backend services in Java",
        logo: ps,
      },
      {
        name: "React js & Angular",
        para: "Creating interfaces",
        logo: reactjs,
      },
      {
        name: "Laravel",
        para: "Building microservices and MVC",
        logo: sketch,
      },
      {
        name: "Python",
        para: "Creation of Automated Projects and Data Science",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Creation of Applications With high efficiency and security technologies, preserving clean code and design patterns in order to have a long life cycle for the software.",
        logo: services_logo1,
      },
      {
        title: "Transformation and data science",
        para: " Manipulation data recovery transformation of structured and semi-structured data visualization of data in graphical representation KPI and other representations",
        logo: services_logo2,
      },
      {
        title: "Backend Security",
        para: "Development of APIs RestFull Soap gRCP and WebHook with excellent security patterns to avoid SQL injection, brute force and DDOS attacks, keeping the Backend safe and armored, creation of defensive and automated tools for API protection",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "CRM + Web Emermedica",
        image: project1,
        
      },
      {
        title: "Inventory system for CCL",
        image: project2,
      },
      {
        title: "Ticket sales website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "my work career",
    subtitle: "experience",
    testimonials_content: [
      {
        review:
          "“As a full-stack developer at Nevtis Corp, I improved VoIP and telecommunications systems with quick migrations and new web pages. I developed internal tools and used technologies such as PHP, Laravel, React, MySQL, MongoDB, AWS, Docker, Git and Linux.”",
        img: avatar1,
        name: "Nevtis Full Stack Developer and Support",
      },
      {
        review:
          "“I developed web applications with .Net Core, Java and Python, managing projects in Jira and Git. Deployed in Azure, ensuring quality with Sonar and optimizing queries. I designed APIs and services, integrating them with SQL and MongoDB. Technologies: .Net Core, Django, Laravel. Improved backend security and performance, frontend efficiency with React and Angular.”",
        img: avatar2,
        name: "CNN Full Stack Developer",
      },
      {
        review:
          "“Data analysis and project improvement. Automation with macros in Excel. Using Python and Pandas for backend analysis and solutions. Experience in SQL and MongoDB. Incident control in cloud services. Change management with Git and Jira. Creation and scaling of APIs in VPS environments.”",
        img: avatar3,
        name: "Konecta BPO Bigdata consultant and developer",
      },
      {
        review:
          "“Backend development with PHP and JavaScript, using Laravel, CodeIgniter, WordPress and Drupal. Efficient database design with SQL Server, MySQL and MongoDB. Implementation of services in Linux environments with Docker and Azure. Task management with Jira for efficient monitoring and agile adaptation to changes.”",
        img: avatar4,
        name: "Emermedica Back-end developer",
        
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "I can help you with your projects",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "If you have reached the end and want to know me more or receive a professional service, do not hesitate to contact me, you can do so with the QR code 👈🏼oh also below in the button 👇🏼",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "ezequielalarconmejia@gmail.com",
        icon: GrMail,
        link: "mailto:ezequielalarconmejia@gmail.com",
      },
      {
        text: "+57 305 8637963",
        icon: MdCall,
        link: "https://w.app/DevEzeAlarcon",
      },
      {
        text: "Ezequiel Alarcon Mejia",
        icon: AiFillLinkedin,
        link: "https://www.linkedin.com/in/ezequiel-alarc%C3%B3n-mej%C3%ADa/",
      },
      {
        text: "EzeAlarcon",
        icon: AiFillGithub,
        link: "https://github.com/EzeAlarcon?tab=repositories",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
