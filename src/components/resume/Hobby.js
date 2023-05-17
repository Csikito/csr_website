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
          <picture>
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
          </picture>
          <picture>
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
          </picture>
          <picture>
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
          </picture>
          <picture>
            <source type="image/webp" srcSet={cooking} />

            <img
              className={`absolute ${
                isHidden === "hidden"
                  ? "top-[290px] left-[45%] h-[0px]"
                  : "top-[230px] lgl:top-[215px] left-[40%] sml:left-[43%] lgl:left-[45%] h-[130px] lgl:h-[150px] "
              } transition-all duration-1000 -rotate-6`}
              src={cookingPng}
              alt="csr"
            />
          </picture>
        </div>
      </div>
    </motion.div>
  );
}

export default Hobby;
