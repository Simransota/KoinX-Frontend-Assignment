import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-[#0052FE] text-2xl font-bold">Koin<span className="text-[#0052FE]">X</span></span>
            <sup className="text-xs ml-0.5">TM</sup>
          </Link>

          {/* Navigation Links and Get Started Button */}
          <div className="flex items-center ml-auto space-x-8">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/crypto-taxes" className="text-gray-700 hover:text-gray-900">
                Crypto Taxes
              </Link>
              <Link href="/free-tools" className="text-gray-700 hover:text-gray-900">
                Free Tools
              </Link>
              <Link href="/resource-center" className="text-gray-700 hover:text-gray-900">
                Resource Center
              </Link>
            </div>
            
            {/* Get Started Button */}
            <Button className="bg-[#0052FE] hover:bg-[#0040CC] text-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
