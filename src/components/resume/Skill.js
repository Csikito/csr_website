import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaBootstrap,
  FaGithub,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss, SiFlask } from "react-icons/si";
import skill__img from "../../assets/images/png/skill.png";

function Skill({ content }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full  gap-10"
    >
      <div className=" w-full h-full mdl:h-[948px]  ">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            {content.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">{content.title}</h2>
        </div>
        <div className="w-full  flex flex-col gap-8 mdl:gap-20 mt-10 py-4 sml:py-16 px-2 sml:px-10 rounded-[5px] relative ">
          <div className=" w-[300px] h-[300px] rounded-full m-auto z-20 animate-rotate relative">
            <div className="text-7xl text-yellow-300 inline-block animate-rotate-negativ absolute top-0 left-0 ">
              <div className="animate-wiggle">
                <FaPython />
              </div>
            </div>
            <div className="text-7xl text-white inline-block animate-rotate-negativ absolute top-0 right-0 ">
              <div className="animate-wiggle">
                <SiFlask />
              </div>
            </div>
            <div className="text-7xl text-yellow-500 inline-block animate-rotate-negativ absolute bottom-0 right-0">
              <div className="animate-wiggle">
                <TbBrandJavascript />
              </div>
            </div>
            <div className="text-7xl text-blue-400 inline-block animate-rotate-negativ absolute bottom-0 left-0">
              <div className="animate-wiggle">
                <FaReact />
              </div>
            </div>
            <div className="text-7xl text-green-400 inline-block animate-rotate-negativ absolute top-28 left-8">
              <div className="animate-wiggle">
                <FaDatabase />
              </div>
            </div>
            <div className="text-7xl text-purple-500 inline-block animate-rotate-negativ absolute top-28 right-8">
              <div className="animate-wiggle">
                <FaBootstrap />
              </div>
            </div>
            <div className="text-7xl text-blue-400 inline-block animate-rotate-negativ absolute top-8 left-28">
              <div className="animate-wiggle">
                <SiTailwindcss />
              </div>
            </div>
            <div className="text-7xl text-black inline-block animate-rotate-negativ absolute bottom-8 left-28">
              <div className="animate-wiggle">
                <FaGithub />
              </div>
            </div>
          </div>
          <div className="hidden mdl:block m-auto">
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[460px] h-[400px] rounded bg-[#CEDDF6] dark:bg-[#123050] opacity-90 z-10 "></div>
            <img
              src={skill__img}
              alt="skill__img"
              className="absolute top-10 left-1/2 -translate-x-1/2 w-[400px] opacity-80 "
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
