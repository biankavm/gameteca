'use client'

import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

export function Input() {
  const [input, setInput] = useState<string>('')

  const router = useRouter()

  function handleSearch(e: FormEvent) {
    e.preventDefault()

    if (!input) return

    router.push(`/game/search/${input}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="w-full bg-[#FBF8F1] my-5 flex gap-2 items-center justify-between rounded-lg p-2"
    >
      <input
        type="text"
        placeholder="Procurando algum jogo? ..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-[#FBF8F1] outline-none w-11/12"
      />

      <button type="submit">
        <FiSearch size={24} color="#393939" />
      </button>
    </form>
  )
}
