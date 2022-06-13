import React from "react";
import Form from "../minComponents/Form";

export default function Contact() {
  return (
    <div name="contact" className="w-full my-32 responsive relative">
      <div className="max-w-[1240px] mx-auto padding">
        <h1 className="title">Contactame</h1>
        <h1 className="sub-title">Hablemos. Cuéntame sobre tu proyecto</h1>
        <Form />
      </div>
      {/*mañana 9 am 
      av5 a norte numero 17 -98 oficina:703
      edificio nucleo profesional
      
      ir a temporal. av5 norte numero 22-24 oficina:203
      edificio vanessa
      
      copia de cedula ampliada x 2,
      carta laboral x 2,
      referencias personales x 2,
      certificados de estudio*/}
      <div className="absolute svgbground shadow-lg shadow-cyan-500/50 w-full h-1/2 left-0 right-0 bottom-0 blur-sm rounded-t-[25px] z-[-1] mx-auto"></div>
    </div>
  );
}
