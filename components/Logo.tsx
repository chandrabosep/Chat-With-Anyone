import Image from "next/image"
import Link from "next/link"
import { AspectRatio } from "@/components/ui/aspect-ratio"


const Logo = () => {
  return (
    <Link href="/" prefetch className="overflow-hidden">
      <div className="flex justify-center items-center w-72 h-14">
        <AspectRatio ratio={16/9} className="flex items-center justify-center">
          <Image priority src="/logo.svg" alt="logo" width={1000} height={1000} className="dark:filter dark:invert" />
        </AspectRatio>
      </div> 
    </Link>
  )
}
export default Logo
