import Image from 'next/image'
import { Button } from './ui/button'

export const Hero = () => {
  return (
    <section className="bg-primary py-28">
      <div className="container mx-auto flex flex-col items-center justify-center gap-20">
        <div className="flex flex-col items-center space-y-[50px]">
          <h1 className="text-primary-foreground text-center text-[100px] leading-tight font-bold">
            Presenting the next-gen anaylitics software
          </h1>
          <div className="flex items-center gap-[22px]">
            <Button variant={'secondary'}>Let`s talk</Button>
            <Button variant={'outline'} className="bg-transparent text-white">
              Get started
            </Button>
          </div>
        </div>
        <div className="relative h-[900px] w-[1600px]">
          <Image src={'/hero/hero.png'} alt="hero" className="h-full w-full object-cover" fill />
        </div>
      </div>
    </section>
  )
}
