import React from "react";
import { codeXp } from "../../Data/Data";

export default function Skills() {
  return (
    <>
      <div className="max-w-[1240px] p-4 mx-auto flex flex-col justify-center">
        <div className="grid  gap-4  sm:grid-cols-2 md:grid-cols-3">
          {codeXp.map((item, index) => {
            return (
              <div key={index} className="h-20  bg-[#0F172A]/40 bg-opacity-20 backdrop-blur-md rounded-2xl drop-shadow-md border border-cyan-500 shadow-lg shadow-cyan-600/50">
                <div className="flex flex-col justify-center items-center my-2">
                  <item.icon
                    className="w-11 h-auto"
                    style={{ color: `${item.color}` }}
                  />
                  <span className="text-white m-.5">{item.heading}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
