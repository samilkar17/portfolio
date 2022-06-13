import React from "react";
import Course from "../minComponents/Course";

export default function Courses() {
  return (
    <div name="courses" className="w-full responsive my-32 padding">
      <div className="max-w-[1240px] mx-auto">
        <h1 className="title">Conocimientos</h1>
        <h1 className="sub-title">Estudios Realizados</h1>
        <Course />
      </div>
    </div>
  );
}
