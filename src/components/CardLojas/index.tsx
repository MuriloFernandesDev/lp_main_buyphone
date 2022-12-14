import Image, { StaticImageData } from 'next/image'

interface CardLojasProps {
   image: string | StaticImageData
   width: number
}
const CardLojas = ({ image, width }: CardLojasProps) => {
   return (
      <Image
         className="md:grayscale bg-black/40 md:min-w-[200px] cursor-pointer md:hover:bg-white hover:grayscale-0 transition duration-300 p-5 w-32 md:w-52 min-h-[6rem] max-h-[6rem] flex items-center justify-center bg-base-100 rounded-lg"
         src={image}
         width={width}
         alt="Logo Markt"
         quality={100}
      ></Image>
   )
}

export default CardLojas
