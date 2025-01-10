import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">KoinX</h1>
        <nav>
          <Button variant="ghost">Crypto Taxes</Button>
          <Button variant="ghost">Free Tools</Button>
          <Button variant="ghost">Resource Center</Button>
          <Button variant="default">Get Started</Button>
        </nav>
      </div>
    </header>
  )
}

