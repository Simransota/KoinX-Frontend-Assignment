import { ChevronRight } from 'lucide-react'
import Link from "next/link"

export function Breadcrumb() {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <Link href="#" className="hover:text-gray-900">Cryptocurrencies</Link>
      <ChevronRight className="w-4 h-4" />
      <span className="text-gray-900">Bitcoin</span>
    </div>
  )
}

