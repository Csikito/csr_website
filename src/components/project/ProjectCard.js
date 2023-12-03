import React from "react";
import { FaPager, FaGithub } from "react-icons/fa";

function ProjectCard({ data }) {
  return (
    <div className="group relative w-full min-w-[250px] min-h-[200px]  sm:min-w-[320px] h-full sm:min-h-[301px] md:gap-5 sml:transform-style-3d sml:perspective-750">
      <div className="absolute w-full h-full projectCard backface-hidden  group-hover:rotate-y-180  ">
        <picture className="w-full h-full flex justify-center">
          <source type="image/webp" srcSet={data.srcLogo} />
          <img
            className="object-cover  project_logo_filter w-[130px] h-[130px] sm:w-[230px] sm:h-[230px]"
            src={data.srcLogoPng}
            alt={data.title}
          />
        </picture>

        <h3 className="text-base uppercase text-designColor font-semibold">
          {data.title}
        </h3>
      </div>

      <div className="projectCard absolute w-full h-full min-h-[200px] sm:min-h-[301px] -rotate-y-180  backface-hidden group-hover:rotate-y-0 ">
        <div className="relative w-full h-full overflow-hidden">
          <div className="w-full h-full overflow-hidden rounded-lg">
            <picture>
              <source type="image/webp" srcSet={data.srcImg} />
              <img
                className=" h-[100%] object-cover "
                src={data.srcImgPng}
                alt={data.title}
              />
            </picture>
          </div>
          <div className="absolute top-0 right-0 w-full h-full flex flex-col justify-end gap-2 dark:bg-black dark:bg-opacity-80 bg-bodyColor bg-opacity-60  rounded-lg font-semibold">
            <div className="flex justify-between items-center pt-2 px-2 sm:px-6">
              <h3 className="text-base uppercase text-designColor text-center ">
                {data.title}
              </h3>
              <div className="flex gap-2">
                <a
                  href={data.linkWeb}
                  className="text-lg w-9 h-9 dark:bg-black bg-white rounded-full cursor-pointer flex justify-center items-center text-gray-400 hover:text-designColor duration-300"
                >
                  <FaPager />
                </a>
                <a
                  href={data.linkGit}
                  className="text-lg w-9 h-9 dark:bg-black bg-white rounded-full cursor-pointer flex justify-center items-center text-gray-400 hover:text-designColor duration-300"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="text-sm tracking-wide pb-2 px-2 sm:py-4 sm:px-6 text-gray-50 duration-300">
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
