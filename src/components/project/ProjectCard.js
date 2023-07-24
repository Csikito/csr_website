import React from "react";

function ProjectCard({ data, handelModalView }) {
  return (
    <div
      onClick={(e) => {
        handelModalView(data, e);
        let bodyAddClass = document.getElementsByTagName("body");
        bodyAddClass[0].style.overflowY = "hidden";
      }}
      className="projectCard"
    >
      <picture className="w-full h-full flex justify-center">
        <source type="image/webp" srcSet={data.srcLogo} />
        <img
          className=" object-cover group-hover:scale-110 duration-300 project_logo_filter"
          src={data.srcLogoPng}
          alt={data.title}
        />
      </picture>

      <h3 className="text-base uppercase text-designColor ">{data.title}</h3>
    </div>
  );
}

export default ProjectCard;
