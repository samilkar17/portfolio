import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";
import userImg from "../../assets/images/user.png";
export default function Home() {
  return (
    <>
      <div
        name="home"
        className="w-full responsive flex flex-col justify-between "
      >
        <div className="grid gap-4  md:grid-cols-2 max-w-[1240px] mx-auto my-32 ">
          <div className="flex flex-col justify-center md:items-start w-full padding">
            <p className="title">Hola, Soy Sebastián Murillo</p>
            <h1 className="py-3 sub-title md:text-7xl ">
              Ingeniero Multimedia
            </h1>
            <p className="text-xl">
              Me apasiona crear sistemas multimedia que solucionen problemas y
              logren mejorar el uso de la tecnología. Actualmente me encuentro
              realizando una especialización en inteligencia artificial, te
              invito a ver mis proyectos!
            </p>
            <Link
              to="projects"
              className="flex justify-center items-center cursor-pointer py-3 px-6 my-4 rounded-lg text-white bg-cyan-500 hover:bg-[#1da1f2]/90 shadow-lg shadow-cyan-500/50 sm:w-[60%]"
            >
              Ver proyectos
            </Link>
            <div className="flex space-x-4">
              <a
                href="https://github.com/samilkar17"
                target="_blank"
                rel="noreferrer"
                className="text-white bg-[#24292F]/50 hover:bg-[#24292F]/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                <FaGithub className="mr-2 w-6 h-6" />
                Github
              </a>
            </div>
          </div>
          <div className="hero">
            <img className="hero_image " src={userImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
