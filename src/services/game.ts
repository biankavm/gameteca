import { REVALIDATE_TIME } from '@/constants'

const scopeError = 'Gameteca Game Service'

const baseUrl = `${process.env.BASE_URL}`

export async function getDalyGame() {
  try {
    const res = await fetch(`${baseUrl}/next-api/?api=game_day`, {
      next: { revalidate: REVALIDATE_TIME }
    })
    return res.json()
  } catch (error) {
    throw new Error(`[${scopeError}] Error in get daly game: ${error}`)
  }
}

export async function getGamesData() {
  try {
    const res = await fetch(`${baseUrl}/next-api/?api=games`, {
      next: { revalidate: REVALIDATE_TIME }
    })
    return res.json()
  } catch (error) {
    throw new Error(`[${scopeError}] Error in get games data: ${error}`)
  }
}
