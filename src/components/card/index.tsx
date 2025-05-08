"use client";

import Image from "next/image";
import { Mail, Phone, Linkedin, Globe } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <div className="bg-[#bb9b32] flex  flex-col text-center content-start rounded-3xl w-full py-20 h-full shadow-lg">
        <div className="flex justify-center -mt-16 mb-4 ">
          <Image
            src="/avatar.jpg" // Reemplaza por tu imagen real
            alt="imagen avatar"
            width={100}
            height={100}
            className="rounded-full border-4 border-white"
          />
        </div>
        <h1 className="text-lg font-bold">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <p className="text-sm"> Lorem ipsum dolor</p>
        <p className="text-xs mt-2 px-2 text-white/90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae
          sequi vero facere accusantium ipsum voluptatem debitis dolore saepe
          pariatur aliquam sunt, quam sit porro id quia iste vitae totam?
        </p>
        <button className="mt-4 bg-white text-[#d178f3] rounded-full px-4 py-2 text-sm font-semibold">
          Guardar Contacto
        </button>{" "}
        <div className="flex flex-row justify-between pt-6 px-2  h-1/2">
          <IconButton icon={<Phone className="w-1/2 h-4" />} label="Teléfono" />{" "}
          <IconButton icon={<Mail className="w-1/2  h-4" />} label="Correo" />
          <IconButton
            icon={<Linkedin className="w-1/2  h-4" />}
            label="Linkedin"
          />
          <IconButton icon={<Globe className="w-1/2  h-4" />} label="Web" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
function IconButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <a className="p-5 flex  flex-col items-center rounded-[20px] shadow-xl bg-[#5e4d16] hover:scale-105 duration-300 text-[#d8c37d]">
      {icon}
      <span className="text-xs text-white mt-1">{label}</span>
    </a>
  );
}
