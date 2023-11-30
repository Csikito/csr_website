import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  csrBlack,
  csrColor,
  basketball,
  cooking,
  hiiking,
  technology,
} from "../../assets/img";
import {
  csrBlackPng,
  csrColorPng,
  basketballPng,
  cookingPng,
  hiikingPng,
  technologyPng,
} from "../../assets/imgPng";

function Hobby({ content }) {
  const [isHidden, setIsHidden] = useState("hidden");

  const handleHobby = () => {
    setIsHidden((oldHidden) => (oldHidden === "hidden" ? "" : "hidden"));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full h-[750px] mdl:h-full gap-10"
    >
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] flex  items-center">
          {content.subtitle}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">{content.title}</h2>
      </div>
      <div className=" h-[777px] py-6 lgl:py-12 font-titleFont flex flex-col justify-center gap-4  relative">
        <div className="w-full flex justify-center">
          <picture className="flex justify-center">
            <source type="image/webp" srcSet={csrBlack} />
            <img
              className="absolute top-[300px] h-[350px] mdl:h-[400px] cursor-pointer "
              src={csrBlackPng}
              alt="csr"
              onClick={handleHobby}
            />
          </picture>
          <picture className="flex justify-center">
            <source type="image/webp" srcSet={csrColor} />
            <img
              className={` absolute top-[300px] h-[350px] mdl:h-[400px] cursor-pointer ${isHidden}`}
              src={csrColorPng}
              alt="csr"
              onClick={handleHobby}
            />
          </picture>
        </div>
        <div>
          <picture className="group cursor-pointer w-100 h-100 ">
            <source type="image/webp" srcSet={basketball} />

            <img
              className={`absolute ${
                isHidden === "hidden"
                  ? "top-[290px] left-[45%] h-[0px]"
                  : " top-[180px] lgl:top-[100px] left-[0%] md:left-[5%] lgl:left-[10%] h-[120px] md:h-[150px] lgl:h-[190px] animate-bounce"
              } transition-all duration-1000 rounded-[25%] `}
              src={basketballPng}
              alt="csr"
            />
            <div className="absolute bottom-1/2 right-0 translate-y-1/2 w-full h-0 group-hover:h-fit  invisible group-hover:visible overflow-hidden group-hover:p-5  dark:bg-[#0D243C] bg-designColor dark:bg-opacity-90 bg-opacity-80 border  border-designColor rounded-lg dark:shadow-shadowResume shadow-lg shadow-cyan-500/50 z-50 transition-all duration-300 ">
              <p className="mb-2">
                A programozás és a kosárlabda hasonlóságai érdekes párhuzamokat
                mutatnak a két különböző terület között. Ahogyan a kosárlabda
                csapatmunkát és stratégiai gondolkodást igényel a sikerhez, úgy
                a programozásban is elengedhetetlen a csapatmunka és a jól
                megtervezett kódarchitektúra.
              </p>
              <p>
                A programozók és kosárlabdázók egyaránt szembesülnek
                kihívásokkal, amelyek megoldása során fejlesztik kreativitásukat
                és problémamegoldó képességeiket. Mindkét tevékenység ösztönzi
                az egyéni fejlődést, miközben a csapat egészének sikere is
                kulcsfontosságú.
              </p>
            </div>
          </picture>

          <picture className="group cursor-pointer ">
            <source type="image/webp" srcSet={technology} />

            <img
              className={`absolute ${
                isHidden === "hidden"
                  ? "top-[290px] left-[45%] h-[0px]"
                  : "top-4 lgl:top-[0px] left-[15%] md:left-[23%] lgl:left-[35%] h-[100px] md:h-[120px] lgl:h-[140px] animate-bounce"
              } transition-all duration-1000 `}
              src={technologyPng}
              alt="csr"
            />
            <div className="absolute bottom-1/2 right-0 translate-y-1/2 w-full h-0 group-hover:h-fit  invisible group-hover:visible overflow-hidden group-hover:p-5  dark:bg-[#0D243C] bg-designColor dark:bg-opacity-90 bg-opacity-80 border  border-designColor rounded-lg dark:shadow-shadowResume shadow-lg shadow-cyan-500/50 z-50 transition-all duration-300 ">
              <p className="mb-2 ">
                A programozás mindig is lenyűgözött, kezdetben azért, mert napi
                hosszú órákat töltöttem a számítógép előtt, és a fehér hátterű
                képernyő zavart. Ekkor kezdtem stílus lapokat írni az iskolai
                projektekhez, használva különböző kiterjesztéseket. A vállalati
                környezetben is folytattam ezt a szokásomat, amikor egy
                stíluslapot készítettem a cég webes szoftveréhez, és
                természetesen amikor megtudták hogy ílyen stíluslappal
                rendelkezem, minden kollégámnak fel kellett telepítenem.
              </p>
              <p>
                Az igazi áttörés akkor jött el, amikor egy elavult rendszerrel
                találkoztam a munkahelyemen, ahol kézzel kellett beírni az
                adatokat. Nem hihettem el, hogy nincs automatizált megoldás
                erre, így elszántan nekiálltam, és három nap alatt sikerült
                megoldanom. Az eredmény nemcsak időmegtakarítás volt, hanem
                egyértelműen megmutatta, hogy a programozással rendkívül
                hatékonyan lehet optimalizálni folyamatokat. Ezért döntöttem el,
                hogy karriert váltok, hiszen miért ne csinálnám azt, amit igazán
                élvezek és amiben valódi változást hozhatok létre?
              </p>
            </div>
          </picture>
          <picture className="group cursor-pointer">
            <source type="image/webp" srcSet={hiiking} />

            <img
              className={`absolute ${
                isHidden === "hidden"
                  ? "top-[290px] left-[45%] h-[0px]"
                  : "top-[100px]  left-[65%] lgl:left-[70%] h-[110px] md:h-[150px] lgl:h-[200px] animate-bounce "
              } transition-all duration-1000 `}
              src={hiikingPng}
              alt="csr"
            />
            <div className="absolute bottom-1/2 right-0 translate-y-1/2 w-full h-0 group-hover:h-fit  invisible group-hover:visible overflow-hidden group-hover:p-5  dark:bg-[#0D243C] bg-designColor dark:bg-opacity-90 bg-opacity-80 border  border-designColor rounded-lg dark:shadow-shadowResume shadow-lg shadow-cyan-500/50 z-50 transition-all duration-300 ">
              <p className="mb-2">
                A programozás és a kosárlabda hasonlóságai érdekes párhuzamokat
                mutatnak a két különböző terület között. Ahogyan a kosárlabda
                csapatmunkát és stratégiai gondolkodást igényel a sikerhez, úgy
                a programozásban is elengedhetetlen a csapatmunka és a jól
                megtervezett kódarchitektúra.A programozók és kosárlabdázók
                egyaránt szembesülnek kihívásokkal, amelyek megoldása során
                fejlesztik kreativitásukat és problémamegoldó képességeiket.
                Mindkét tevékenység ösztönzi az egyéni fejlődést, miközben a
                csapat egészének sikere is kulcsfontosságú.Mind a túrázóknak,
                mind a programozóknak fontos, hogy új területeket fedezzenek
                fel, legyen az egy hegycsúcs vagy egy új programozási nyelv.
              </p>
              <p>
                A túrázás során a térképekkel való navigáció és a túraútvonalak
                tervezése készségeket igényel, ami hasonló a programozás
                területén a kódok strukturálásához és optimalizálásához. Mindkét
                tevékenység során kiemelkedő a problémamegoldó képesség, hiszen
                a túrázóknak alkalmazkodniuk kell az időjárási körülményekhez és
                a terepviszonyokhoz, míg a programozóknak meg kell találniuk a
                hatékony megoldásokat különböző kihívásokra.
              </p>
            </div>
          </picture>
          <picture className="group cursor-pointer">
            <source type="image/webp" srcSet={cooking} />

            <img
              className={`absolute  ${
                isHidden === "hidden"
                  ? "top-[290px] left-[45%] h-[0px]"
                  : "top-[230px] lgl:top-[215px] left-[40%] sml:left-[43%] lgl:left-[45%] h-[130px] lgl:h-[150px] "
              } transition-all duration-1000 -rotate-6`}
              src={cookingPng}
              alt="csr"
            />
            <div className="absolute bottom-1/2 right-0 translate-y-1/2 w-full h-0 group-hover:h-fit  invisible group-hover:visible overflow-hidden group-hover:p-5  dark:bg-[#0D243C] bg-designColor dark:bg-opacity-90 bg-opacity-80 border  border-designColor rounded-lg dark:shadow-shadowResume shadow-lg shadow-cyan-500/50 z-50 transition-all duration-300 ">
              <p>
                Ahogyan a programozók a kódokban alkotnak, úgy a szakácsok az
                ízek és textúrák kombinációjában. A precizitás és a pontos
                utasítások követése mindkét területen elengedhetetlen a kívánt
                eredmény eléréséhez. Mind a kódolás, mind a főzés során a hibák
                kijavítása és az optimalizálás is része a folyamatnak.
              </p>
            </div>
          </picture>
        </div>
      </div>
    </motion.div>
  );
}

export default Hobby;
