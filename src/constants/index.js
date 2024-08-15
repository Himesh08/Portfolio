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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Problem Solver",
    icon: backend,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Student Coordinator",
    company_name: "Mathematics And Computing Society",
    icon: starbucks,
    iconBg: "bg-primary",
    date: "Aug 2023 - Present",
    points: [
      "Organized and facilitated events such as Decyber, Chess Warfare, engaging 200+ participants annually.",
      "Through coordination efforts, Supported junior members, fostering their involvement in academic and extracurricular activities within the society, ensuring impactful learning and teamwork experiences",
    ],
  },
 
  {
    title: "Mentor",
    company_name: "Desh Ke Mentor",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Aug 2023",
    points: [
      "Mentored students in their academic journey and preparation for their career paths, guiding 15 individuals through personalized sessions",
      "With a focus on enhancing study techniques and exam strategies, Conducted 20+ mentoring sessions, nurturing their academic growth and ensuring thorough preparation for their examinations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "himeshgoyall08",
    designation: "Leetcode",
    // company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Lyrics Finder",
    description:
      "Implemented integration of external APIs, facilitating dynamic retrieval of song lyrics for over 100,000 tracks; this enhancement boosted user engagement by 40 percent and improved app retention rates significantly.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Himesh08/Lyrical_Land",
  },
  {
    name: "All in One Editor And Compressor ",
    description:
      " Developed an application that provides a Rich Text Editor, Image Editor, and File Compressor in one place. Achieved file compression up to 56 percent using the Huffman Encoding algorithm.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    // source_code_link: "https://github.com/",
  },
  {
    name: "PortFolio",
    description:
      "Developed a personal portfolio using Three JS, incorporating over 5 interactive 3D models to enhance user engagement. Achieved a 30% increase in user interaction, demonstrating a successful blend of creativity and technical skill.",
    tags: [
      {
        name: "ThreeJs",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Himesh08/Portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
