import React from "react";
import Project from '../minComponents/Project'
export default function Projects() {
  return (
    <div name="projects" className="w-full my-32 relative">
      <div className="max-w-[1240px] padding mx-auto">
        <h1 className="title">Desarrollos</h1>
        <h1 className="sub-title">Proyectos Realizados</h1>
       <Project/>
      </div>
      <div className="absolute svgbground shadow-lg shadow-cyan-500/50 w-1/2 h-screen right-0 top-0 blur-sm rounded-l-[25px] z-[-1] mx-auto"></div>
    </div>
  );
}
