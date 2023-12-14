import {
  ukFlag,
  huFlag,
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
  ukFlagPng,
  huFlagPng,
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

const Hun = {
  nav: {
    home: "Home",
    about: "Rólam",
    resume: "Önéletrajz",
    projects: "Projectek",
    contact: "Kapcsolat",
    flag: {
      srcHuFlag: huFlag,
      srcHuFlagPng: huFlagPng,
      srcUkFlag: ukFlag,
      srcUkFlagPng: ukFlagPng,
    },
  },
  home: {
    title_h4: "üdvözöllek a világomban.",
    title_h1_1: "Hello,",
    title_h1_2: "vagyok",
    title_span: "Csikós Ronald",
    moti_text1:
      "„Mindenki tudja, hogy bizonyos dolgokat nem lehet megvalósítani, mígnem jön valaki, aki erről nem tud, és megvalósítja.”",
    moti_author1: "Albert Einstein",
    moti_text2:
      "“A legnagyobb kockázat az, ha nem vállalsz semmilyen kockázatot. Egy gyorsan változó világban az egyetlen stratégia, ami biztosan sikertelen, az, ha soha nem kockáztatsz.”",
    moti_author2: "Mark Zuckerberg",
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
        description: `Egy weboldal ahol finomabbnál finomabb receptek találhatók. [ #HTML, #CSS, #JS #API ]`,
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
        description: `Ez egy szállítási vállalat weboldala. [ #HTML, #CSS, #JS ]`,
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
        description: `Egy minimalista webshop ahol a vásárlok minőségi termékeket tudnak vásárolni. [ #JS, #React, #TailwindCSS ]`,
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
        description: `Fejlesztettem egy egyszerű, de szórakoztató webes játékot. [ #JS, #React ]`,
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
        description: `Véletlen felhasználó generátor webes alkalmazás. [ #JS, #React, #API ] .`,
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
        description: `Autóbérlés, könnyen és egyszerűen. [ #JS, #React, #TailwindCSS, #NPM-csomag]`,
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
      basketballDescription: {
        part1: `A programozás és a kosárlabda hasonlóságai érdekes párhuzamokat
      mutatnak a két különböző terület között. Ahogyan a kosárlabda
      csapatmunkát és stratégiai gondolkodást igényel a sikerhez, úgy
      a programozásban is elengedhetetlen a csapatmunka és a jól
      megtervezett kódarchitektúra.`,
        part2: `A programozók és kosárlabdázók egyaránt szembesülnek
        kihívásokkal, amelyek megoldása során fejlesztik kreativitásukat
        és problémamegoldó képességeiket. Mindkét tevékenység ösztönzi
        az egyéni fejlődést, miközben a csapat egészének sikere is
        kulcsfontosságú.`,
      },
      technologyDescription: {
        part1: `A programozás mindig is lenyűgözött, kezdetben azért, mert napi
      hosszú órákat töltöttem a számítógép előtt, és a fehér hátterű
      képernyő zavart. Ekkor kezdtem stílus lapokat írni az iskolai
      projektekhez, használva különböző kiterjesztéseket. A vállalati
      környezetben is folytattam ezt a szokásomat, amikor egy
      stíluslapot készítettem a cég webes szoftveréhez, és
      természetesen amikor megtudták hogy ílyen stíluslappal
      rendelkezem, minden kollégámnak fel kellett telepítenem.`,
        part2: `Az igazi áttörés akkor jött el, amikor egy elavult rendszerrel
      találkoztam a munkahelyemen, ahol kézzel kellett beírni az
      adatokat. Nem hihettem el, hogy nincs automatizált megoldás
      erre, így elszántan nekiálltam, és három nap alatt sikerült
      megoldanom. Az eredmény nemcsak időmegtakarítás volt, hanem
      egyértelműen megmutatta, hogy a programozással rendkívül
      hatékonyan lehet optimalizálni folyamatokat. Ezért döntöttem el,
      hogy karriert váltok, hiszen miért ne csinálnám azt, amit igazán
      élvezek és amiben valódi változást hozhatok létre?`,
      },
      hiikingDescription: {
        part1: `A túrázás során a térképekkel való navigáció és a túraútvonalak
      tervezése készségeket igényel, ami hasonló a programozás
      területén a kódok strukturálásához és optimalizálásához. Mindkét
      tevékenység során kiemelkedő a problémamegoldó képesség, hiszen
      a túrázóknak alkalmazkodniuk kell az időjárási körülményekhez és
      a terepviszonyokhoz, míg a programozóknak meg kell találniuk a
      hatékony megoldásokat különböző kihívásokra.`,
      },
      cookingDescription: {
        part1: `Ahogyan a programozók a kódokban alkotnak, úgy a szakácsok az
      ízek és textúrák kombinációjában. A precizitás és a pontos
      utasítások követése mindkét területen elengedhetetlen a kívánt
      eredmény eléréséhez. Mind a kódolás, mind a főzés során a hibák
      kijavítása és az optimalizálás is része a folyamatnak.`,
      },
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
      flag: {
        srcHuFlag: huFlag,
        srcHuFlagPng: huFlagPng,
        srcUkFlag: ukFlag,
        srcUkFlagPng: ukFlagPng,
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
