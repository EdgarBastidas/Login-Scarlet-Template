import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoArrowBackSharp } from "react-icons/io5";
import { SlEye } from "react-icons/sl";
import { HiOutlineEyeOff } from "react-icons/hi";

// Imágenes SVG personalizables
import FormaArriba from "../assets/svg/Forma_Arriba.svg";
import FormaAbajo from "../assets/svg/Forma_Abajo.svg";
import RegisterIcono from "../assets/svg/RegisterIcono.svg";
import FondoFormLogin from "../assets/svg/FondoLogin.svg";
import FondoBotonLogin from "../assets/svg/FondoBotonLogin.svg";

const Register = () => {
  const [mostrarPass, setMostrarPass] = useState(false);
  const [mostrarConfirPass, setMostrarConfirPass] = useState(false);

  const togglePasswordVisibility = () => {
    setMostrarPass(!mostrarPass);
  };

  const toggleConfirmPasswordVisibility = () => {
    setMostrarConfirPass(!mostrarConfirPass);
  };

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
          src={RegisterIcono}
          className="w-[20%] h-[20%]"
          alt="register-icon"
        />
        <h1 className="font-bold text-textos text-2xl">Registro</h1>
      </div>
      <div
        className="bg-gradient-to-b from-primary to-secoudary flex flex-col justify-center h-[50%] rounded-2xl p-4 mt-10 sm:mt-4"
      >
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
          <div className="pt-2 flex flex-col">
            <label className="px-auto text-white text-sm" htmlFor="password">
              Contraseña
            </label>
            <div className="relative text-textoInput">
              <RiLockPasswordLine className="absolute text-xl top-4 left-2" />
              <input
                id="password"
                className="w-full outline-none rounded-sm mt-1 p-2 pl-10"
                type={mostrarPass ? "text" : "password"}
                placeholder=".................."
                required
              />
              {mostrarPass ? (
                <SlEye
                  className="absolute text-xl top-4 right-2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <HiOutlineEyeOff
                  className="absolute text-xl top-4 right-2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </div>
          <div className="pt-2 flex flex-col">
            <label
              className="px-auto text-white text-sm"
              htmlFor="confirmarPass"
            >
              Confirmar Contraseña
            </label>
            <div className="relative text-textoInput">
              <RiLockPasswordLine className="absolute text-xl top-4 left-2" />
              <input
                id="confirmarPass"
                className="w-full outline-none rounded-sm mt-1 p-2 pl-10"
                type={mostrarConfirPass ? "text" : "password"}
                placeholder=".................."
                required
              />
              {mostrarConfirPass ? (
                <SlEye
                  className="absolute text-xl top-4 right-2 cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                />
              ) : (
                <HiOutlineEyeOff
                  className="absolute text-xl top-4 right-2 cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                />
              )}
            </div>
          </div>
          <div className="flex flex-row items-center justify-center mt-[7%]">
            <button className="bg-white text-textoInput shadow-sm shadow-fuchsia-700 rounded-2xl p-2 pl-14 pr-14">
              Registrarme
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col gap-2 text-textos font-bold items-center justify-center pt-4">
        <h1>¿Ya tienes una cuenta?</h1>
        <Link to="/Login-Scarlet-Template">
          <button
            className="bg-gradient-to-b from-primary to-secoudary text-white font-normal rounded-xl p-2 pl-20 pr-20"
          >
            Iniciar Sesión
          </button>
        </Link>
      </div>
    </>
  );
};

export default Register;
