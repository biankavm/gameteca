import { Game } from '@/types/game'
import { GameCard } from '../card'

interface GamesListProps {
  games: Game[]
}

export function GamesList({ games }: GamesListProps) {
  return (
    <>
      <h2 className="text-lg font-bold mt-8 mb-5"> Jogos para conhecer </h2>
      <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {games.map((game, idx) => (
          <div key={idx}>
            <GameCard game={game} />
          </div>
        ))}
      </section>
    </>
  )
}
