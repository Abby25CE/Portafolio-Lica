"use client"

import { Mail, Phone, Linkedin, Globe } from "lucide-react"
import AvatarImage from "./AvatarImage"
import IconButton from "./IconButton"
import { useEffect, useState } from "react"

const ProfileCard = () => {
  const [pulseState, setPulseState] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseState((prev) => (prev + 0.01) % 1)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#080b12] text-[#cfb3e6] relative">
      {/* Background circles */}
      <div className="absolute left-0 top-0 h-[150px] w-[150px] bg-[#ad9bff] rounded-full blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-[150px] w-[150px] bg-[#ad9bff] rounded-full blur-[150px]" />

      {/* Noise filter */}
      <svg className="hidden">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
        </filter>
        <filter id="noiseFilter2">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
        </filter>
        <clipPath id="rounded-clip">
          <rect width="300" height="300" rx="20" />
        </clipPath>
      </svg>

      {/* Card container */}
      <div
        className="relative w-[300px] h-[300px] flex flex-col items-center justify-center p-6 rounded-[20px] z-10 transition-all duration-1000 ease-in-out"
        style={{
          background:
            "radial-gradient(50% 90% at top, rgba(173, 155, 255, 0.3), rgba(11, 12, 22, 0.3)), linear-gradient(135deg, #1f193d, #05060d)",
          transform: `scale(${1 + pulseState * 0.03})`,
        }}
      >

        {/* Noise filter overlay */}
        <div
          className="absolute inset-0 w-full h-full z-20 bg-black mix-blend-hard-light transition-all duration-1000 ease-in-out"
          style={{
            clipPath: "url(#rounded-clip)",
            filter: "url(#noiseFilter2)",
            opacity: 0.16 + pulseState * 0.06,
          }}
        />

        {/* Backdrop effect */}
        <div
          className="absolute z-[-2] rounded-[20px] opacity-30 transition-all duration-1000 ease-in-out"
          style={{
            width: `${300 + pulseState * 40}px`,
            height: `${300 + pulseState * 40}px`,
            borderRadius: `${20 + pulseState * 13}px`,
            background:
              "radial-gradient(circle at top, rgba(173, 155, 255, 0.3), rgba(11, 12, 22, 0.3)), linear-gradient(135deg, #1f193d, #05060d)",
          }}
        />

        {/* Shadow effect */}
        <div
          className="absolute inset-0 w-full h-full rounded-[20px] z-10 transition-all duration-1000 ease-in-out"
          style={{
            boxShadow: `0px 4px ${40 + pulseState * 40}px ${5 + pulseState * 5}px rgba(173, 155, 255, ${0.2 + pulseState * 0.2})`,
          }}
        />

          {/* Avatar */}
        <div className="flex justify-center mb-4 z-30">
          <AvatarImage
            src="/Perfil.png"
            alt="imagen avatar"
            width={80}
            height={80}
            className="rounded-full border-2 border-[#6c6499]"
          />
        </div>

        {/* Content */}
        <h1 className="text-lg font-bold z-30 text-[#cfb3e6]">Lorem ipsum dolor sit amet</h1>
        <p className="text-sm z-30 text-[#cfb3e6] opacity-90">Lorem ipsum dolor</p>
        <p className="text-xs mt-2 px-2 z-30 text-[#cfb3e6] opacity-80 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae sequi vero facere accusantium ipsum.
        </p>

        {/* Icons */}
        <div className="flex flex-row justify-between w-full pt-6 px-2 z-30">
          <IconButton icon={<Phone className="w-5 h-5" />} label="Teléfono" />
          <IconButton icon={<Mail className="w-5 h-5" />} label="Correo" />
          <IconButton icon={<Linkedin className="w-5 h-5" />} label="Linkedin" />
          <IconButton icon={<Globe className="w-5 h-5" />} label="Web" />
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
