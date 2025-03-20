import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  sql,
  meta,
  starbucks,
  tesla,
  shopify,
  sumz,
  snapgram,
  GenAi,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "sql",
    icon: sql,
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our project, but Anurag proved me wrong.",
    name: "Purvesh Jambhulkar",
    designation: "student",
    company: "DYP, Akurdi",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their teammate's success like Anurag does.",
    name: "Piyush Mogre",
    designation: "Vice President",
    company: "ITESA, DYPCOE",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
  },
  {
    testimonial:
      "After Anurag designed our website, our traffic increased by 50%. He is a great UI/UX designer!",
    name: "Trupti Firake",
    designation: "Professor",
    company: "DYPCOE, Akurdi",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sumz",
    description:
      "Sumz is an AI article summarizer built using Vite, React, Redux, TailwindCSS, and RapidAPI to efficiently summarize articles from provided links, delivering concise insights for enhanced readability and productivity.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sumz,
    source_code_link: "https://github.com/AnuragM7666/SUMZ-The-article-summarizer",
  },
  {
    name: "Snapgram",
    description:
      "Snapgram is a feature-rich social media platform developed using TypeScript, ShadCN, and Appwrite Cloud having advanced functionality like infinite scrolling, ensuring a seamless content browsing experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescipt",
        color: "green-text-gradient",
      },
      {
        name: "ShadCN",
        color: "pink-text-gradient",
      },
    ],
    image: snapgram,
    source_code_link: "https://github.com/AnuragM7666/Snapgram",
  },
  {
    name: "GenAI",
    description:
      "An AI Image Generator built using the OpenAI API allows users to create stunning, AI-generated images by providing simple text prompts. It leverages advanced machine learning models to turn ideas into visual art seamlessly.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAiAPI",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: GenAi,
    source_code_link: "https://github.com/AnuragM7666/AI-Image-Generator",
  },
];

export { services, technologies,  testimonials, projects }; //experiences