import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

// Iconos React
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { SlEye } from "react-icons/sl";
import { HiOutlineEyeOff } from "react-icons/hi";

// Imágenes SVG personalizables
import FormaArriba from "../assets/svg/Forma_Arriba.svg";
import FormaAbajo from "../assets/svg/Forma_Abajo.svg";
import LoginIcono from "../assets/svg/LoginIcono.svg";

// Imágenes estáticas
import GoogleLogo from "../assets/img/GoogleLogo.png";
import FaceLogo from "../assets/img//FaceLogo.png";
import TwiterLogo from "../assets/img//TwiterLogo.png";

const Login = () => {
  const [mostrarPass, setMostrarPass] = useState(false); // estado de la variable mostrarPass

  // funcion para controlar el valor de la variable mostrarPass, para usar el icono de mostrar contraseña
  const estadoPassword = () => {
    setMostrarPass(!mostrarPass);
  };

  //funcion para simular el inicio de sesion
  const ValidarInicioSesion = (e) => {
    e.preventDefault();
    // Simulación de validación de credenciales
    alert("Datos recibidos para validar el inicio de sesion");
    // Aquí podrías debes validar con tu backend los datos de inicio de sesion y redireccionamiento
  };
  return (
    <>
      <img
        src={FormaArriba}
        className="absolute w-[30%] sm:w-[25%] top-0 right-0"
      />
      <img
        src={FormaAbajo}
        className="absolute w-[80%] sm:w-[40%] left-0 bottom-0"
      />
      <div className="flex flex-col items-center justify-center pt-[5%]">
        <img src={LoginIcono} className="w-[20%] h-[20%]" alt="Login Icon" />
        <h1 className="font-bold text-textos text-2xl">Login</h1>
      </div>
      <div className="bg-gradient-to-b from-primary to-secoudary flex flex-col justify-center h-[40%] rounded-2xl p-4 mt-10 sm:mt-4">
        <form onSubmit={ValidarInicioSesion}>
          <div className="flex flex-col">
            <label className="px-auto text-white text-sm" htmlFor="email">
              Email
            </label>
            <div className="relative text-textoInput">
              <MdOutlineEmail className="absolute text-xl top-4 left-2" />
              <input
                name="email"
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
              Password
            </label>
            <div className="relative text-textoInput">
              <RiLockPasswordLine className="absolute text-xl top-4 left-2" />
              <input
                name="password"
                id="password"
                className="w-full outline-none rounded-sm mt-1 p-2 pl-10"
                type={mostrarPass ? "text" : "password"}
                placeholder=".................."
                required
              />
              {mostrarPass ? (
                <SlEye
                  className="absolute text-xl top-4 right-2 cursor-pointer"
                  onClick={estadoPassword}
                />
              ) : (
                <HiOutlineEyeOff
                  className="absolute text-xl top-4 right-2 cursor-pointer"
                  onClick={estadoPassword}
                />
              )}
            </div>
            <Link
              to="/Login-Scarlet-Template/recover"
              className="text-white text-sm pt-3 mb-1"
            >
              Olvidé mi contraseña
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center mt-2">
            <button className="bg-white text-textoInput shadow-sm shadow-fuchsia-700 rounded-2xl p-1 pl-14 pr-14">
              Ingresar
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center pt-1">
        <h1 className="pt-2">Iniciar sesión con</h1>
        <div className="flex flex-row gap-4 justify-center items-center">
          <img className="w-8 h-8" src={GoogleLogo} alt="Google Logo" />
          <img className="w-6 h-6" src={FaceLogo} alt="Facebook Logo" />
          <img className="w-6 h-6" src={TwiterLogo} alt="Twitter Logo" />
        </div>
      </div>
      <div className="flex flex-col gap-2 text-textos font-bold items-center justify-center">
        <h1>Necesitas una cuenta?</h1>
        <Link to="/Login-Scarlet-Template/register">
          <button className="bg-gradient-to-b from-primary to-secoudary text-white font-normal rounded-xl p-2 pl-20 pr-20">
            Registrarme
          </button>
        </Link>
      </div>
    </>
  );
};

export default Login;
