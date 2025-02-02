import {
  ukFlag,
  huFlag,
  mastermind,
  rentCar,
  fleet,
  mastermindLogo,
  rentCarLogo,
  fleetLogo,
} from "../assets/img";

import {
  ukFlagPng,
  huFlagPng,
  mastermindPng,
  rentCarPng,
  fleetPng,
  mastermindLogoPng,
  rentCarLogoPng,
  fleetLogoPng,
} from "../assets/imgPng";

const Eng = {
  nav: {
    home: "Home",
    about: "About",
    resume: "Resume",
    projects: "Projects",
    contact: "Contact",
    flag: {
      srcHuFlag: huFlag,
      srcHuFlagPng: huFlagPng,
      srcUkFlag: ukFlag,
      srcUkFlagPng: ukFlagPng,
    },
  },
  home: {
    title_h4: "Welcome to my World.",
    title_h1_1: "Hi, I'm",
    title_h1_2: "",
    title_span: "Ronald Csikós",
    moti_text1:
      "„Everyone knew it was impossible, until a fool who didn’t know came along and did it.”",
    moti_author1: "Albert Einstein",
    moti_text2:
      "“The biggest risk is not taking any risk... In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks.”",
    moti_author2: "Mark Zuckerberg",
    contact: "Find to ",
    contact_span: "me",
  },
  about: {
    title: "About Me",
    subtitle: "GET TO KNOW ME",
    title_h1_1: "I'm",
    title_h1_2: "",
    title_span: "Ronald Csikós",
    description: [
      `I began my programming journey as a self-taught developer, exploring foundational technologies like HTML, CSS, JavaScript, and Python. 
                  As my skills grew, I delved into React for building dynamic user interfaces.`,
      `My professional journey led me to focus on Python and Flask, where I applied these technologies extensively to develop efficient 
                  and scalable web applications, including REST APIs. Working with these tools gave me a deeper understanding of backend development 
                  and problem-solving in real-world scenarios.`,
      `Currently, I am expanding my expertise in cloud technologies such as AWS and Azure, aiming to create robust, cloud-powered solutions.
                   I am passionate about continuous learning and contributing to impactful and innovative projects.`,
    ],
  },
  projects: {
    title: "My Projects",
    subtitle: "VISIT MY PORTFOLIO",

    projectsData: [
      {
        title: "MASTERMIND",
        description: `I developed a simple but fun web game. [ #JS, #React ]`,
        srcImg: mastermind,
        srcLogo: mastermindLogo,
        srcImgPng: mastermindPng,
        srcLogoPng: mastermindLogoPng,
        linkWeb: "https://csikito.github.io/mastermind/",
        linkGit: "https://github.com/Csikito/mastermind",
        id: 1,
      },
      {
        title: "RENT CAR",
        description: `Car rental, easier and simpler. [ #JS, #React, #TailwindCSS, #NPM-packages ]`,
        srcImg: rentCar,
        srcLogo: rentCarLogo,
        srcImgPng: rentCarPng,
        srcLogoPng: rentCarLogoPng,
        linkWeb: "https://csikito.github.io/csr_rentcar/",
        linkGit: "https://github.com/Csikito/csr_rentcar",
        id: 2,
      },
      {
        title: "FLEET MANAGEMENT",
        description: `It is under development, app will be released soon... [ #Python, #Flask, #SQL ]`,
        srcImg: fleet,
        srcLogo: fleetLogo,
        srcImgPng: fleetPng,
        srcLogoPng: fleetLogoPng,
        linkWeb: "",
        linkGit: "https://github.com/Csikito/fleet_management_system",
        id: 3,
      },
    ],
  },
  resume: {
    title: "Resume",
    subtitle: "1+ YEARS OF EXPERIENCE",
    resumeBtn: {
      education: "Education",
      hobby: "Hobby",
      skill: "Skill",
      language: "Language",
    },
    education: {
      title: "Education Quality",
      subtitle: "2011 - ",

      item1: {
        title: "Web Development",
        subtitle: "Programozaskarrier.hu (2022)",
        description:
          "I learned the basics of programming in more depth through an online video course.",
      },
      item2: {
        title: "BSc in Mechanical Engineering",
        subtitle: "Subotica Tech - College of Applied Sciences (2015 - 2019)",
        description: `I graduated from college in Subotica as a mechanical engineer (Product Development).`,
      },
      item3: {
        title: "Secondary School Education",
        subtitle: "Ivan Sarić Technical Secondary School (2011 - 2015)",
        description: `I graduated from secondary school as a computer editor-engineering technician,
        where I learned 3D modelling and the basics of computer science`,
      },
    },
    hobby: {
      title: "Hobbies",
      subtitle: "Favourite",
      basketballDescription: {
        part1: `The similarities between programming and basketball make for interesting parallels between the two different fields. Just as basketball requires teamwork and strategic thinking to succeed, so in programming, teamwork and a good understanding of the game are essential well-designed code architecture.`,
        part2: `Programmers and basketball players alike are faced with challenges that develop their creativity and problem-solving skills. Both activities encourage individual development, while the success of the team as a whole is key.`,
      },
      technologyDescription: {
        part1: `I have always been fascinated by programming, initially because it was a daily long hours a day in front of the computer, and the white background screen distracted me. That's when I started writing style sheets for school school projects, using various extensions. The corporate I continued this habit in the corporate environment, when a style sheet for the company's web software, and of course when they found out that I had a style sheet I had to install it on all my colleagues.`,
        part2: `The real breakthrough came when I came across an outdated system at work where I had to enter data manually. I couldn't believe that there was no automated solution to this, so I was determined to get started and I did it in three days. The result was not only a time-saver, but also a clear demonstration that programming can be used to optimise processes very efficiently. That's why I decided to change careers, because why not do something I really enjoy and where I can make a real difference?`,
      },
      hiikingDescription: {
        part1: `Navigating with maps and hiking trails while hiking skills, which is similar to those required for programming structuring and optimizing code in programming. Both problem solving skills are paramount in both activities, as hikers have to adapt to weather conditions and and terrain conditions, while programmers have to find effective solutions to different challenges.`,
      },
      cookingDescription: {
        part1: `Just as programmers create in code, chefs create in the combination of flavours and textures. In both areas, precision and following precise instructions are essential to achieve the desired result. In both coding and cooking, correcting mistakes and optimising are part of the process.`,
      },
    },
    skill: {
      title: "Development Skills",
      subtitle: "Features",
    },
    language: {
      title: "Languages",
      subtitle: "Features",
      lan: {
        eng: "English",
        hun: "Hungarian",
      },
      flag: {
        srcHuFlag: huFlag,
        srcHuFlagPng: huFlagPng,
        srcUkFlag: ukFlag,
        srcUkFlagPng: ukFlagPng,
      },
      exp: {
        native: "Native",
        elementary: "Intermediate",
      },
    },
  },
  contact: {
    title: "CONTACT",
    subtitle: "Contact With Me",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    send: "Send",
    contact: "Find to ",
    contactSpan: "me",
    error: {
      name: "Please enter your name!",
      email: "Please enter your valid email!",
      subject: "Please enter your subject!",
      message: "Please enter your message!",
      succesMassage: "Your Messages has been sent Successfully!",
    },
  },
};

export default Eng;
