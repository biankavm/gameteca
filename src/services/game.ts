import { REVALIDATE_TIME } from '@/constants'

export async function getDalyGame() {
  try {
    const res = await fetch(`${process.env.BASE_URL}/next-api/?api=game_day`, {
      next: { revalidate: REVALIDATE_TIME }
    })
    return res.json()
  } catch (error) {
    throw new Error(`[Gameteca Game Service] Error in get daly game: ${error}`)
  }
}
