import { items } from "@/data/main-navlink"
import { Navlink } from "./navlink"
import { Button } from "./ui/button"

export const Navbar = () => {
  return (
    <header className="py-5 bg-primary">
      <div className="container mx-auto flex items-center justify-between">
        <p className="font-bold text-primary-foreground text-[30px]">Groclone.</p>
        <nav>
          <ul className="flex gap-8 items-center text-white">
            <Navlink links={items} />
          </ul>
        </nav>
        <Button variant={"secondary"}>Get started</Button>
      </div>
    </header>
  )
}
