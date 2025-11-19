import { Game } from '@/types/game'

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  return <h1> {game.title}</h1>
}
