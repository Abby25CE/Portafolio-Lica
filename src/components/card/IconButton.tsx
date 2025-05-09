import type { ReactNode } from "react"

interface IconButtonProps {
  icon: ReactNode
  label: string
}

const IconButton = ({ icon, label }: IconButtonProps) => {
  return (
    <button className="flex flex-col items-center justify-center gap-1 group">
      <div className="p-2 rounded-full bg-[#1f193d]/50 group-hover:bg-[#6c6499]/30 transition-all duration-300">
        {icon}
      </div>
      <span className="text-xs opacity-80 group-hover:opacity-100 transition-all duration-300">{label}</span>
    </button>
  )
}

export default IconButton
