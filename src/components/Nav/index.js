import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Logo";
import { Link } from "react-scroll";

export default function Nav() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[65px] flex justify-between items-center py-2 bg-[#0F172A]/20 backdrop-blur-3xl bg-opacity-50  border-b border-gray-600 max-w-8xl mx-auto z-10 padding">
      <Logo />
      {/*Menu*/}

      <ul className="hidden md:flex">
        <li className="itemMenu cursor-pointer">
          <Link  to="home" smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li className="itemMenu cursor-pointer">
          <Link  to="projects" smooth={true} duration={500}>
            Proyectos
          </Link>
        </li>
        <li className="itemMenu cursor-pointer">
          <Link  to="courses" smooth={true} duration={500}>
            Estudios
          </Link>
        </li>
        <li className="itemMenu cursor-pointer">
          <Link  to="contact" smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>
      {/*Menu*/}
      {/*Hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars className="text-white hover:cursor-pointer items-end" />
        ) : (
          <FaTimes className="text-white hover:cursor-pointer items-end" />
        )}
      </div>
      {/*Hamburger*/}

      {/*Mobile-menu*/}
      <ul className={!nav ? "hidden" : "mobileButton overflow-y-hidden"}>
        <li className="itemMenuMobile">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li className="itemMenuMobile">
          <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
            Proyectos
          </Link>
        </li>
        <li className="itemMenuMobile">
          <Link onClick={handleClick} to="courses" smooth={true} duration={500}>
            Estudios
          </Link>
        </li>
        <li className="itemMenuMobile">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>
      {/*Mobile-menu*/}
    </div>
  );
}
