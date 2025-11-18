import { getDalyGame } from '@/services/game'

import { Container } from '@/components'
import { Game } from '@/types/game'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRightSquare } from 'react-icons/bs'

async function Home() {
  const dalyGame: Game = await getDalyGame()

  const { id, image_url, title } = dalyGame

  console.log(dalyGame)
  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">
          Separamos um jogo exclusivo para você!
        </h1>

        <Link href={`/game/${id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="w-full max-h-96 h-96 relative rounded-lg">
              {' '}
              {/* posição da imagem relativa ao pai*/}
              <div className="absolute z-20 bottom-0 p-3 flex justify-center items-center gap-2">
                {' '}
                {/* sobrepoe a imagem! */}
                <p className="font-bold text-xl text-white"> {title}</p>
                <BsArrowRightSquare size={24} color="#fff" />
              </div>
              <Image
                src={image_url}
                alt={title}
                priority
                quality={100}
                fill // ativa preenchimento total da imagem na tela
                className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300"
                // maxima altura da imagem
                // object-cover para a imagem nao ficar quebrada (encaixa na altura)
                // rounded-lg para arredondar as bordas

                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw" // renderização com base no tamanho
                // quando o maximo da largura for 768ox, usa 100vw (100% da largura)
                // se o máximo da largura for 1200px, usa 33% da largura, para ficar mais facil de carregar
              />
            </div>
          </section>
        </Link>
      </Container>
    </main>
  )
}

export default Home
