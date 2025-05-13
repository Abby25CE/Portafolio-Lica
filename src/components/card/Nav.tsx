"use client";
import ThemeToggle from "@/containers/ThemeToggle";
import Image from "next/image";

const Nav = () => {
  return (
    <>
      <div className="absolute top-2 left-0 w-full px-4">
        <div className="flex items-center justify-between">
          <ThemeToggle />
          <div className="text-lg font-semibold text-black dark:text-white">
            Logo
          </div>

          {/* Imagen */}
          <Image
            src="/Logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};
export default Nav;
