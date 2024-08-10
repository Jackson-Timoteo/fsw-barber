import { SearchCodeIcon } from "lucide-react"
import Header from "./_components/header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import Image from "next/image"

const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá! Jackson</h2>
        <p>Sábado, 11 de Agosto.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchCodeIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full rounded-xl">
          <Image src="/Banner.png" alt="banner" fill className="object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Home
