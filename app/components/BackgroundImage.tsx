import Image from "next/image"

interface IProps {
  src: any;
}

export default function BackgoundImage({ src }: IProps) {
  return (
    <div className="w-full h-full absolute top-0"
      style={{
        zIndex: '-13',
        background: `linear-gradient(to bottom, rgba(36, 42, 56, 0.3), rgba(36, 42, 56, 1) 80%)`
      }}>
      <Image src={src} alt="placeholder" placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          zIndex: '-11',
        }} />
    </div>
  )
}
