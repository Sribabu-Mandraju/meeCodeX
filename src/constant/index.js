import projects from "../assets/icons/achievements/projects.svg";
import clients from "../assets/icons/achievements/clients.svg";
import teams from "../assets/icons/achievements/teams.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import ecrush from "../assets/projects/ecrush.png";

export const qsn = [
  {
    id: 1,
    qsn: "What is AZ LOGIC ?",
    ans: "Welcome to AZLogic Solutions, Inc. We specialize in delivering comprehensive software solutions tailored to your business needs, all within a budget-friendly framework.",
  },
  {
    id: 2,
    qsn: "Why Choose Us ?",
    ans: " We provide high-quality software development services that fit within your budget, making technology accessible for businesses of all sizes.",
  },
  {
    id: 3,
    qsn: "Our Uniqness ",
    ans: "We specialize in developing Minimum Viable Products (MVPs) to help you quickly launch and validate your business ideas in the market.",
  },
];

export const achievements = [
  { id: 1, name: "Project Completed", value: "17", img: projects },
  { id: 2, name: "Satisfied Clients", value: "87", img: clients },
  { id: 3, name: "Expert Teams", value: "9", img: teams },
];

export const social = [
  { id: 1, link: "http://www.x.com", icon: FaXTwitter },
  { id: 2, link: "http://www.x.com", icon: FaFacebookF },
  { id: 3, link: "http://www.x.com", icon: FaLinkedinIn },
  { id: 4, link: "http://www.x.com", icon: FaInstagram },
];

export const testimonials = [
  {
    id: 1,

    name: "John Doe",
    position: "CEO at Acme Corp",
    content:
      "The team at AZ LOGIC truly understands our needs. Their resources have empowered our product development team to innovate faster.",
  },
  {
    id: 2,

    name: "Jane Smith",
    position: "Marketing Director at TechWave",
    content:
      "AZ LOGIC has been a valuable partner. Their resources helped us streamline our operations and improve efficiency across the board.",
  },
  {
    id: 3,

    name: "Alice Johnson",
    position: "Product Manager at InnovateX",
    content:
      "The team at AZ LOGIC truly understands our needs. Their resources have empowered our product development team to innovate faster.",
  },
  {
    id: 4,

    name: "Michael Brown",
    position: "Founder at GreenTech",
    content:
      "AZ LOGIC has been a valuable partner. Their resources helped us streamline our operations and improve efficiency across the board.",
  },
  {
    id: 5,

    name: "Michael Brown",
    position: "Founder at GreenTech",
    content:
      "AZ LOGIC has been a valuable partner. Their resources helped us streamline our operations and improve efficiency across the board.",
  },
];

export const project = [
  {
    title: "Ecrush",
    img: ecrush,
    desc: "Website of a student body organization at RGUKT,Nuzvid",
    lang: ["react", "nodejs", "mongodb"],
    github: "",
  },
  {
    title: "Ecrush",
    img: ecrush,
    desc: "Website of a student body organization at RGUKT,Nuzvid",
    lang: ["react", "nodejs", "mongodb"],
    github: "",
  },
  {
    title: "Ecrush",
    img: ecrush,
    desc: "Website of a student body organization at RGUKT,Nuzvid",
    lang: ["react", "nodejs", "mongodb"],
    github: "https://github.com/Yasvanth-2005/ecrush",
  },
  {
    title: "Ecrush",
    img: ecrush,
    desc: "Website of a student body organization at RGUKT,Nuzvid",
    lang: ["react", "nodejs", "mongodb"],
    github: "https://github.com/Yasvanth-2005/ecrush",
  },
];

import {
  FaCode,
  FaMobileAlt,
  FaSearch,
  FaBullhorn,
  FaRocket,
  FaPalette,
  FaTools,
} from "react-icons/fa";

export const services = [
  {
    name: "Website Design & Development",
    desc: "Your website is the foundation of your digital presence. We design and develop modern, responsive, and user-friendly websites that captivate your audience and drive results. From small business websites to complex web applications, we deliver solutions that align with your goals.",
    icon: FaCode,
  },
  {
    name: "App Design & Development",
    desc: "In today’s mobile-first world, we help businesses connect with their customers through innovative mobile applications. Whether it’s a native app, cross-platform solution, or enterprise-grade application, we ensure top-notch design and seamless functionality.",
    icon: FaMobileAlt,
  },
  {
    name: "Search Engine Optimization (SEO)",
    desc: "Get found by your target audience with our tailored SEO strategies. We optimize your website to rank higher on search engines, drive organic traffic, and boost your online visibility.",
    icon: FaSearch,
  },
  {
    name: "Digital Marketing",
    desc: "Expand your reach and grow your business with our comprehensive digital marketing services. From PPC campaigns to content creation and social media management, we create strategies that deliver measurable results.",
    icon: FaBullhorn,
  },
  {
    name: "MVP Development for Startups",
    desc: "Validate your business ideas quickly and cost-effectively with our MVP development services. We build functional prototypes to help you test your concept, gather user feedback, and launch your product with confidence.",
    icon: FaRocket,
  },
  {
    name: "UI/UX Design",
    desc: "Deliver exceptional user experiences with our UI/UX design services. From intuitive interfaces to engaging prototypes, we craft designs that prioritize usability and customer satisfaction.",
    icon: FaPalette,
  },
  {
    name: "Website Maintenance & Support",
    desc: "Keep your website running smoothly with our reliable maintenance and support services. We handle updates, security enhancements, and performance optimizations so you can focus on growing your business.",
    icon: FaTools,
  },
];
