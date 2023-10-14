import {
  foodBar,
  trans,
  flashcard,
  TicTacToe,
  randomUser,
  rentCar,
  foodLogo,
  transLogo,
  gameLogo,
  flashLogo,
  userLogo,
  rentCarLogo,
} from "../assets/img";

import {
  foodBarPng,
  transPng,
  flashcardPng,
  TicTacToePng,
  randomUserPng,
  rentCarPng,
  foodLogoPng,
  transLogoPng,
  gameLogoPng,
  flashLogoPng,
  userLogoPng,
  rentCarLogoPng,
} from "../assets/imgPng";

const Hun = {
  nav: {
    home: "Home",
    about: "Rólam",
    resume: "Önéletrajz",
    projects: "Projectek",
    contact: "Kapcsolat",
  },
  home: {
    title_h4: "üdvözöllek a világomban.",
    title_h1_1: "Hello,",
    title_h1_2: "vagyok",
    title_span: "Csikós Ronald",
    moti_text1:
      "„Mindenki tudja, hogy bizonyos dolgokat nem lehet megvalósítani, mígnem jön valaki, aki erről nem tud, és megvalósítja.”",
    moti_text2:
      "“A legnagyobb kockázat az, ha nem vállalsz semmilyen kockázatot. Egy gyorsan változó világban az egyetlen stratégia, ami biztosan sikertelen, az, ha soha nem kockáztatsz.”",

    contact: "Keress",
    contact_span: "fel",
  },
  about: {
    title: "Rólam",
    subtitle: "Tudj meg többet",
    title_h1_1: "",
    title_h1_2: "vagyok",
    title_span: "Csikós Ronald",
    description: `Fiatal motivált karrierváltó vagyok, kiváló szociális készségekkel.
    Pályámat gépészmérnökként kezdtem. Másfél éve jelentkeztem egy online
    webfejlesztői tanfolyamra, ahol elsajátítottam a webfejlesztés alap 
    eszközeit, mint például: HTML, CSS, JS, valamint készítettem projekteket 
    Reactben is.`,
  },
  projects: {
    title: "Projectek",
    subtitle: "Portfólió",
    projectsData: [
      {
        title: "FoodBar",
        description: `Egyszerű recept webes alkalmazás. HTML, CSS, JavaScript és TheMealDB API használatával készült.`,
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
        description: `Ez egy szállítási vállalat egyszerű weboldala. HTML, CSS használatával készült.`,
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
        description: `Ez egy egyszerű tic-tac-toe játék. HTML, CSS JavaScript használatával készült.`,
        srcImg: TicTacToe,
        srcLogo: gameLogo,
        srcImgPng: TicTacToePng,
        srcLogoPng: gameLogoPng,
        linkWeb: "https://csikito.github.io/csikito_tic-tac-toe/",
        linkGit: "https://github.com/Csikito/csikito_tic-tac-toe",
        id: 3,
      },
      {
        title: "FLASHCARD",
        description: `Egyszerű tanulókártya alkalmazás. HTML, CSS, JavaScript, React használatával készült.`,
        srcImg: flashcard,
        srcLogo: flashLogo,
        srcImgPng: flashcardPng,
        srcLogoPng: flashLogoPng,
        linkWeb: "https://csikito.github.io/csikito_flashcard/",
        linkGit: "https://github.com/Csikito/csikito_flashcard",
        id: 4,
      },
      {
        title: "RANDOM USER",
        description: `Véletlen felhasználó generátor webes alkalmazás. HTML, CSS, JavaScript, React és randomuser API felhasználásával készült.`,
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
        description: `Autóbérlés, könnyebben és egyszerűbben. React, Tailwind-Css valamint több npm csomag segítségével készült.`,
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
    title: "Önéletrajz",
    subtitle: "Tapasztalataim",
    resumeBtn: {
      education: "Tanulmány",
      hobby: "Hobbi",
      skill: "Készség",
      language: "Nyelv",
    },
    education: {
      title: "Tanulmány",
      subtitle: "2011 - ",
      item1: {
        title: "Webfejlesztés",
        subtitle: "Programozaskarrier.hu (2022)",
        description:
          "Online videós tanfolyamon keresztül sajátítottam el mélyebben a programozás alapjait.",
      },
      item2: {
        title: "BSc - Gépészmérnöki",
        subtitle:
          "Szabadkai Műszaki Szakfőiskola Felsőoktatási intézmény (2015 - 2019)",
        description: `Elvégeztem a főiskolát gépészmérnőként (Termékfejlesztés).`,
      },
      item3: {
        title: "Középiskola - Gépésztechnikus",
        subtitle: "Ivan Sarić Müszaki iskola (2011 - 2015)",
        description: `Elvégeztem a Középiskolát számítógépes szerkesztő-gépésztechnikus ként,
        ahol elsajátítottam a 3D modellezést és az informatika alapjait.`,
      },
    },
    hobby: {
      title: "Hobbik",
      subtitle: "Kedvenc",
    },
    skill: {
      title: "Fejlesztési készség",
      subtitle: "Jellemzők",
    },
    language: {
      title: "Nyelvek",
      subtitle: "Jellemzők",
      lan: {
        eng: "Angol",
        hun: "Magyar",
      },
      exp: {
        native: "Anyanyelvi",
        elementary: "Társalgási szint",
      },
    },
  },
  contact: {
    title: "Kapcsolat",
    subtitle: "Vedd fel velem a kapcsolatot",
    name: "Név",
    email: "Email",
    subject: "Tárgy",
    message: "Üzenet",
    send: "Küldés",
    contact: "Keress ",
    contactSpan: "fel",
    error: {
      name: "Kérem írja be a nevét!",
      email: "Kérem adja meg az érvényes e-mail címét!",
      subject: "Kérem adja meg tárgyát!",
      message: "Kérjük, adja meg üzenetét!",
      succesMassage: "Üzeneteit sikeresen elküldtük!",
    },
  },
};

export default Hun;
