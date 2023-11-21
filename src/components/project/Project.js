import React from "react";
import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";

function Project({ content }) {
  return (
    <section id="project" className="w-full py-20 font-titleFont z-10 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-banner bg-cover"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-bodyColor bg-opacity-90 dark:bg-opacity-95"></div>
      <div className="max-w-screen-xl mx-auto sticky px-4">
        <div className="w-full flex justify-center items-center text-center">
          <Title title={content.title} des={content.subtitle} />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-20 xl:gap-10 py-10 px-2 lg:px-10 xl:px-0 justify-center">
          {content.projectsData.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
