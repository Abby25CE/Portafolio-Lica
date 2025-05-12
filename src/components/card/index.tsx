"use client";

import { Mail, Phone, Linkedin, Globe } from "lucide-react";
import AvatarImage from "./AvatarImage";
import IconButton from "./IconButton";
import { useEffect, useState } from "react";
import ThemeToggle from "@/containers/ThemeToggle";
import Image from "next/image";

const ProfileCard = () => {
  const [pulseState, setPulseState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseState((prev) => (prev + 0.01) % 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#ffffff] text-[#cfb3e6] dark:bg-black dark:text-black relative transition-colors duration-500">
      <div className="flex flex-row justify-between">
        <ThemeToggle />
        <Image
          src={"/Logo.png"} // asegúrate de que la ruta sea relativa a la carpeta `public`
          alt="Logo"
          width={20} // ajusta según tus necesidades
          height={20}
          className="w-auto h-auto"
        />
      </div>

      {/* Background circles */}
      <div className="absolute left-0 top-0 h-[150px] w-[150px] bg-[#ad9bff] dark:bg-purple-200 rounded-full blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-[150px] w-[150px] bg-[#ad9bff] dark:bg-purple-200 rounded-full blur-[150px]" />

      {/* SVG Filters */}
      <svg className="hidden">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
          />
        </filter>
        <clipPath id="rounded-clip">
          <rect width="300" height="300" rx="20" />
        </clipPath>
      </svg>

      {/* Card container */}
      <div
        className="relative w-[375px] h-[450px] flex flex-col items-center justify-center p-6 rounded-[20px] z-10
          text-white dark:text-black transition-all duration-500"
        style={{
          background:
            "radial-gradient(50% 90% at top, rgba(173, 155, 255, 0.3), rgba(11, 12, 22, 0.3)), linear-gradient(135deg, #1f193d, #05060d)",
        }}
      >
        {/* Backdrop effect */}
        <div
          className="absolute z-[-2] rounded-[20px] opacity-30 transition-all duration-1000 ease-in-out"
          style={{
            width: `${390 + pulseState * 40}px`,
            height: `${460 + pulseState * 40}px`,
            borderRadius: `${25 + pulseState * 13}px`,
            background:
              "radial-gradient(circle at top, rgba(173, 155, 255, 0.3), rgba(11, 12, 22, 0.3)), linear-gradient(135deg, #1f193d, #05060d)",
          }}
        />

        {/* Shadow */}
        <div
          className="absolute inset-0 w-full h-full rounded-[20px] z-10 transition-all duration-1000 ease-in-out"
          style={{
            boxShadow: `0px 4px ${40 + pulseState * 40}px ${
              5 + pulseState * 5
            }px rgba(173, 155, 255, ${0.2 + pulseState * 0.2})`,
          }}
        />

        {/* Avatar */}
        <div className="flex justify-center mb-9 z-30">
          <AvatarImage
            src="/Perfil.png"
            alt="imagen avatar"
            width={80}
            height={80}
            className="rounded-full border-2 border-[#6c6499] dark:border-gray-300"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col text-center">
          <h1 className="text-lg font-bold z-30">Lorem ipsum dolor sit amet</h1>
          <p className="text-lg z-30">Lorem ipsum dolor</p>
          <p className="text-sm mt-2 px-2 z-40 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            beatae sequi vero facere accusantium ipsum.
          </p>
        </div>

        {/* Contact Icons */}
        <div className="flex flex-row justify-between w-full pt-6 px-2 z-30">
          <a href="tel:+1234567890">
            <IconButton icon={<Phone className="w-5 h-5" />} label="Teléfono" />
          </a>
          <a href="mailto:correo@ejemplo.com">
            <IconButton icon={<Mail className="w-5 h-5" />} label="Correo" />
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              icon={<Linkedin className="w-5 h-5" />}
              label="LinkedIn"
            />
          </a>
          <a href="https://tuweb.com" target="_blank" rel="noopener noreferrer">
            <IconButton icon={<Globe className="w-5 h-5" />} label="Web" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
