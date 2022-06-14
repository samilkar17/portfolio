import React from "react";
import { FaCode } from "react-icons/fa";
import { projects } from "../../../Data/Data";

export default function Project() {
  return (
    <>
      <div className="p-4 mx-auto flex flex-col justify-center md:items-center w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {projects.map((project, index) => {
            return (
              <div className="card" key={index}>
                <div className="text-white font-bold">
                  {project.description}
                </div>
                <div className="">
                  <img
                    className="h-[160px] w-[300px] rounded-2xl object-cover"
                    src={project.image}
                    alt=""
                  />
                </div>

                <a
                  href={project.demo}
                  target="_blank"
                  className="projectBtn bg-blue-500 shadow-lg shadow-blue-500/50 hover:bg-[#1da1f2]/90"
                >
                  Ver
                  <FaCode className="ml-2  w-5 h-5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
