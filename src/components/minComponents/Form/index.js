import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Form() {
  const [showMessage, setShowMessage] = useState(false);
  const [values, setValues] = useState({
    contact_number: "",
    user_name: "",
    user_email: "",
    message: "",
  });
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i6wkuun",
        "template_vru4aee",
        e.target,
        "user_fnsHmQZhI2wieIav84gIP"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="max-w-[1240px] mx-auto flex justify-center my-8 ">
      <div className="form-card">
        <h2 className="text-3xl text-cyan-200 mb-16">Enviame un mensaje</h2>

        <form className="flex flex-col justify-between my-4" onSubmit={sendEmail}>
          <div className="relative z-0 w-full mb-6 group py-2">
            <input
              required
              className="text-white"
              type="number"
              name="contact_number"
              onChange={handleInputChange}
            />
            <label>Numero de Contacto</label>
          </div>
          <div className="relative z-0 w-full mb-6 group py-2">
            <input
              required
              className="text-white"
              type="text"
              name="user_name"
              onChange={handleInputChange}
            />
            <label>Nombre</label>
          </div>
          <div className="relative z-0 w-full mb-6 group py-2">
            <input
              required
              className="text-white"
              type="email"
              name="user_email"
              onChange={handleInputChange}
            />
            <label>Email</label>
          </div>
          <div className="relative z-0 w-full mb-6 group py-2">
            <label className="field-label">Mensaje</label>
            <textarea
              required
              className="my-4 w-full"
              name="message"
              onChange={handleInputChange}
            />
            <button
              className="text-white bg-blue-500 shadow-lg shadow-blue-500/50 hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
        {showMessage ? (
          <div className="succes-message s-form-done">
            <div>Gracias! Su mensaje ha sido enviado exitosamente</div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
