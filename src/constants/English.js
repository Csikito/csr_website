import {
  foodBar,
  trans,
  mastermind,
  TicTacToe,
  randomUser,
  rentCar,
  foodLogo,
  transLogo,
  gameLogo,
  mastermindLogo,
  userLogo,
  rentCarLogo,
} from "../assets/img";

import {
  foodBarPng,
  transPng,
  mastermindPng,
  TicTacToePng,
  randomUserPng,
  rentCarPng,
  foodLogoPng,
  transLogoPng,
  gameLogoPng,
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
        description: `A website with more and more delicious recipes. [ #HTML, #CSS, #JS #API ]`,
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
        title: "TIC-TAC-TOE",
        description: `This is a simple tic-tac-toe game.[ #JS, #React ]`,
        srcImg: TicTacToe,
        srcLogo: gameLogo,
        srcImgPng: TicTacToePng,
        srcLogoPng: gameLogoPng,
        linkWeb: "https://csikito.github.io/csikito_tic-tac-toe/",
        linkGit: "https://github.com/Csikito/csikito_tic-tac-toe",
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
