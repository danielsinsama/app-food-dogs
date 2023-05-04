import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`  ${inter.className}`}
    >
      <h1>Index</h1>
      <Link href={"/nuevo-plan"}>
        PLAN
      </Link>
    </main>
  )
}
