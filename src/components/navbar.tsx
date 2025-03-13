import { items } from '@/data/main-navlink'
import { Navlink } from './navlink'
import { Button } from './ui/button'

export const Navbar = () => {
  return (
    <header className="bg-primary py-5">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-primary-foreground text-[30px] font-bold">Groclone.</p>
        <nav>
          <ul className="flex items-center gap-8 text-white">
            <Navlink links={items} />
          </ul>
        </nav>
        <Button variant={'secondary'}>Get started</Button>
      </div>
    </header>
  )
}
