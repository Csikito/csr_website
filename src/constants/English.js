import {
  foodBar,
  trans,
  mastermind,
  lukaShop,
  randomUser,
  rentCar,
  foodLogo,
  transLogo,
  lukaShopLogo,
  mastermindLogo,
  userLogo,
  rentCarLogo,
} from "../assets/img";

import {
  foodBarPng,
  transPng,
  mastermindPng,
  lukaShopPng,
  randomUserPng,
  rentCarPng,
  foodLogoPng,
  transLogoPng,
  lukaShopLogoPng,
  mastermindLogoPng,
  userLogoPng,
  rentCarLogoPng,
} from "../assets/imgPng";

const Eng = {
  nav: {
    home: "Home",
    about: "About",
    resume: "Resume",
    projects: "Projects",
    contact: "Contact",
  },
  home: {
    title_h4: "Welcome to my World.",
    title_h1_1: "Hi, I'm",
    title_h1_2: "",
    title_span: "Ronald Csikós",
    moti_text1:
      "„Everyone knew it was impossible, until a fool who didn’t know came along and did it.”",
    moti_text2:
      "“The biggest risk is not taking any risk... In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks.”",
    contact: "Find to ",
    contact_span: "me",
  },
  about: {
    title: "About Me",
    subtitle: "GET TO KNOW ME",
    title_h1_1: "I'm",
    title_h1_2: "",
    title_span: "Ronald Csikós",
    description: `A Self-taught Front-end Programmer who is motivated to 
    learn new skills and take on new challenges at the next level of his web development carrier. 
    I started my career as a mechanical engineer. About a year and half ago, I decided to take a new 
    direction in my career, I started my learning journey in web development. 
    I acquired the basic tools of web development through my own projects, 
    such as HTML, CSS, JavaScript, and I've done some projects with React.`,
  },
  projects: {
    title: "My Projects",
    subtitle: "VISIT MY PORTFOLIO",

    projectsData: [
      {
        title: "FoodBar",
        description: `A website with more and more delicious recipes. [ #HTML, #CSS, #JS, #API ]`,
        srcImg: foodBar,
        srcLogo: foodLogo,
        srcImgPng: foodBarPng,
        srcLogoPng: foodLogoPng,
        linkWeb: "https://csikito.github.io/Csikito-Food-Bar/",
        linkGit: "https://github.com/Csikito/Csikito-Food-Bar",
        id: 1,
      },
      {
        title: "Trans",
        description: `This is a simple landing page of an delivery company. [ #HTML, #CSS, #JS ]`,
        srcImg: trans,
        srcLogo: transLogo,
        srcImgPng: transPng,
        srcLogoPng: transLogoPng,
        linkWeb: "https://csikito.github.io/Csikito-Trans/",
        linkGit: "https://github.com/Csikito/Csikito-Trans",
        id: 2,
      },
      {
        title: "LUKA SHOP",
        description: `This is a minimalist webshop that allows customers can buy quality merch. [ #JS, #React, #TailwindCSS ]`,
        srcImg: lukaShop,
        srcLogo: lukaShopLogo,
        srcImgPng: lukaShopPng,
        srcLogoPng: lukaShopLogoPng,
        linkWeb: "https://csikito.github.io/mini_e-commerce/",
        linkGit: "https://github.com/Csikito/mini_e-commerce",
        id: 3,
      },
      {
        title: "MASTERMIND",
        description: `I developed a simple but fun web game. [ #JS, #React ]`,
        srcImg: mastermind,
        srcLogo: mastermindLogo,
        srcImgPng: mastermindPng,
        srcLogoPng: mastermindLogoPng,
        linkWeb: "https://csikito.github.io/mastermind/",
        linkGit: "https://github.com/Csikito/mastermind",
        id: 4,
      },
      {
        title: "RANDOM USER",
        description: `Random user generator web application. [ #JS, #React, #API ]`,
        srcImg: randomUser,
        srcLogo: userLogo,
        srcImgPng: randomUserPng,
        srcLogoPng: userLogoPng,
        linkWeb: "https://csikito.github.io/random_user/",
        linkGit: "https://github.com/Csikito/random_user",
        id: 5,
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
        id: 6,
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
      exp: {
        native: "Native",
        elementary: "Pre-intermediate",
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
