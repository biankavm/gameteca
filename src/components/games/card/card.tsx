import { Game } from '@/types/game'
import Image from 'next/image'
import Link from 'next/link'
import { BiRightArrowCircle } from 'react-icons/bi'

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  const { id, title, image_url } = game

  return (
    <Link href={`/game/${id}`}>
      <section className="w-full bg-slate-200 rounded-lg p-4 mb-5">
        <div className="relative w-full h-56 hover:scale-105 transition-all duration-300">
          <Image
            src={image_url}
            alt={title}
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
            className="rounded-lg object-cover"
          />
        </div>

        <div className="flex items-center mt-4 justify-between">
          <p className="text-sm font-bold px-2 text-black text-ellipsis truncate whitespace-nowrap overflow-hidden">
            {' '}
            {title}
          </p>
          <BiRightArrowCircle size={24} color="#545352" />
        </div>
      </section>
    </Link>
  )
}
