import projects from "../assets/icons/achievements/projects.svg";
import clients from "../assets/icons/achievements/clients.svg";
import teams from "../assets/icons/achievements/teams.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

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
