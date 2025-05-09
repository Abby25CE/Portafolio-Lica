import Image from "next/image"

interface AvatarImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

const AvatarImage = ({ src, alt, width, height, className }: AvatarImageProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      <Image
        src={src || "/placeholder.svg?height=80&width=80"}
        alt={alt}
        width={width}
        height={height}
        style={{ objectFit: "cover" }}
        className="w-full h-full"
        priority
      />
    </div>
  )
}

export default AvatarImage
