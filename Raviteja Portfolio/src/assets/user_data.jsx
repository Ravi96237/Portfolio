import {
  FaGithub,
  FaCode,
  FaReact,
  FaHtml5,
  FaCss3,
  FaJava,
  FaJs,
  FaBootstrap,
  FaNode,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";

export const skills = [
  { icon: <FaCode />, name: "Programming" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3 />, name: "CSS3" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <FaNode />, name: "Node.js" },
  { icon: <RiTailwindCssFill />, name: "Tailwind Css" },
  { icon: <BiLogoMongodb />, name: "MongoDB" },
  { icon: <GrMysql />, name: "MySql" },
];

export const educations = [
  {
    id: 1,
    title: "Bachelor of Technology (IT)",
    institution: "ACE ENGINEERING COLLEGE, Hyderabad",
    duration: "2020 - 2023",
  },
  {
    id: 2,
    title: "Diploma in Mining Engineering",
    institution: "Daripally Anantha Ramulu College of Engineering and Technology,Khammam",
    duration: "2017 - 2020",
  },
  {
    id: 3,
    title: "Secondary School (10th)",
    institution: "NCL High School",
    duration: "2015 - 2017",
  },
];

export const contactLinks = [
  {
    id: "github",
    href: "https://github.com/Ravi96237",
    icon: (
      <FaGithub className="text-4xl text-gray-300 group-hover:text-violet-400" />
    ),
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/raviteja-vaddepalli-5ab590217/",
    icon: (
      <FaLinkedin className="text-4xl text-gray-300 group-hover:text-violet-400" />
    ),
  },
  {
    id: "email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ravitejavaddepalli9@gmail.com&su=Let's%20Connect&body=Hi%20Ravi%20Teja,%20I%20would%20like%20to%20connect%20with%20you",
    icon: (
      <FaEnvelope className="text-4xl text-gray-300 group-hover:text-violet-400" />
    ),
  },
];

export const projectData = [
  {
    title: "Student Analytics System",
    description:
      "A student analytics platform for managing and analyzing student data, providing insights and reports for better academic tracking.",
    githubLink:
      "https://github.com/Ravi96237/student_analytics_header_blue_v8",
  },
  {
    title: "Weather Monitoring System",
    description:
      "A web-based weather monitoring system built using Django and Python that allows users to search for real-time weather information such as temperature, humidity, and atmospheric conditions.",
    githubLink:
      "https://github.com/Ravi96237/WEATHER-MONITORING-SYSTEM-USING-DJANGO",
  },
];