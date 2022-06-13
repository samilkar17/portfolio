import React from "react";
import { courses } from "../../../Data/Data";


export default function Course() {
  return (
    <>
      <div className="max-w-[1240px]  mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="grid  gap-8 my-4 sm:grid-cols-1 md:grid-cols-2">
          {courses.map((course, index) => {
            return (
              <div className="card" key={index}>
                <course.icon className="w-12 h-12" style={{ color: `${course.color}` }}/>
                <h1 className="text-white font-bold">{course.description}</h1>
                <p>{course.detail}</p>
                
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
