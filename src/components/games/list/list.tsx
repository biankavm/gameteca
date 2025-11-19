import { Game } from '@/types/game'
import { GameCard } from '../card'

interface GamesListProps {
  games: Game[]
}

export function GamesList({ games }: GamesListProps) {
  return (
    <>
      <h2 className="text-lg font-bold mt-8 mb-5"> Jogos para conhecer </h2>
      <section>
        {games.map((game, idx) => (
          <div key={idx}>
            <GameCard game={game} />
          </div>
        ))}
      </section>
    </>
  )
}
