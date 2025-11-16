import Image from 'next/image'
import Link from 'next/link'
import { LiaGamepadSolid } from 'react-icons/lia'

export function Header() {
  return (
    <header className="w-full h-28 bg-[#FBF8F1] text-black px-2">
      <div className="max-w-7xl mx-auto flex justify-center items-center h-28 sm:justify-between">
        <nav className="flex justify-center items-center gap-4">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo do gameteca"
              quality={100}
              priority
              width={150}
              height={20}
              className="w-full"
            />
          </Link>

          <Link href="/home">Games</Link>

          <Link href="/profile">Perfil</Link>
        </nav>

        <div className="hidden sm:flex justify-center items-center">
          <Link href="/profile">
            <LiaGamepadSolid size={34} color="#393939" />
          </Link>
        </div>
      </div>
    </header>
  )
}
