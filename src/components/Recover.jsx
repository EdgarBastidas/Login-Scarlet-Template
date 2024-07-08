import React from "react";
import { Link } from "react-router-dom";
// Iconos React
import { MdOutlineEmail } from "react-icons/md";
import { IoArrowBackSharp } from "react-icons/io5";

// Imágenes SVG personalizables
// Imágenes SVG personalizables
import FormaArriba from "../assets/svg/Forma_Arriba.svg";
import FormaAbajo from "../assets/svg/Forma_Abajo.svg";
import RecoverIcono from "../assets/svg/RecoverIcono.svg";

const Recover = () => {
  return (
    <>
      <Link to="/Login-Scarlet-Template">
        <IoArrowBackSharp className="absolute text-white text-2xl top-2 z-10 left-2" />
      </Link>
      <img
        src={FormaArriba}
        className="absolute w-[30%] sm:w-[25%] top-0 left-0 transform scale-x-[-1]"
        alt="forma-arriba"
      />
      <img
        src={FormaAbajo}
        className="absolute w-[80%] sm:w-[40%] transform scale-x-[-1] right-0 bottom-0"
        alt="forma-abajo"
      />
      <div className="flex flex-col items-center justify-center pt-[5%]">
        <img
          src={RecoverIcono}
          className="w-[20%] h-[20%]"
          alt="register-icon"
        />
        <h1 className="font-bold text-textoInput text-2xl">
          Recuperar contraseña
        </h1>
      </div>
      <div className="bg-gradient-to-b from-primary to-secoudary flex flex-col justify-center rounded-2xl p-4 mt-[25%] mb-[20%]">
        <form>
          <div className="flex flex-col">
            <label className="px-auto text-white text-sm" htmlFor="email">
              Email
            </label>
            <div className="relative text-textoInput">
              <MdOutlineEmail className="absolute text-xl top-4 left-2" />
              <input
                id="email"
                className="w-full outline-none rounded-sm mt-1 p-2 pl-10"
                type="email"
                placeholder="example@example.com"
                required
              />
            </div>
          </div>

          <div className="text-center mt-[7%]">
            <button className="bg-white text-textoInput shadow-sm shadow-fuchsia-700 rounded-2xl p-2 pl-14 pr-14 mb-[10%]">
              Enviar
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col gap-2 text-textoInput font-bold items-center justify-center pt-4">
        <h1>¿Ya tienes una cuenta?</h1>
        <Link to="/Login-Scarlet-Template">
          <button className="bg-gradient-to-b from-primary to-secoudary text-white font-normal rounded-xl p-2 pl-20 pr-20 mb-[7%]">
            Iniciar Sesión
          </button>
        </Link>
      </div>
    </>
  );
};

export default Recover;
