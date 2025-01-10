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
    qsn: "What is Sepnoty ?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem veniam vel corporis quo deserunt, quia rem quod accusantium quam ad!",
  },
  {
    id: 2,
    qsn: "How can I join the Sepnotian Club ?",
    ans: "Our membership plan, priced at ₹24,450, is currently available at an 80% discount for ₹4,890. Sign up on our Sepnoty Club page to enjoy exclusive benefits.",
  },
  {
    id: 3,
    qsn: "What is Tepnoty?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem veniam vel corporis quo deserunt, quia rem quod accusantium quam ad!",
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
      "The team at Sepnoty truly understands our needs. Their resources have empowered our product development team to innovate faster.",
  },
  {
    id: 2,

    name: "Jane Smith",
    position: "Marketing Director at TechWave",
    content:
      "Sepnoty has been a valuable partner. Their resources helped us streamline our operations and improve efficiency across the board.",
  },
  {
    id: 3,

    name: "Alice Johnson",
    position: "Product Manager at InnovateX",
    content:
      "The team at Sepnoty truly understands our needs. Their resources have empowered our product development team to innovate faster.",
  },
  {
    id: 4,

    name: "Michael Brown",
    position: "Founder at GreenTech",
    content:
      "Sepnoty has been a valuable partner. Their resources helped us streamline our operations and improve efficiency across the board.",
  },
  {
    id: 5,

    name: "Michael Brown",
    position: "Founder at GreenTech",
    content:
      "Sepnoty has been a valuable partner. Their resources helped us streamline our operations and improve efficiency across the board.",
  },
];
