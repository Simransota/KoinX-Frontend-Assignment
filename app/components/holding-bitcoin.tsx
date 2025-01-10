import { Card, CardContent } from "@/components/ui/card"
import { Calculator } from 'lucide-react'

export function HoldingBitcoin() {
  return (
    <Card className="mt-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">Already Holding Bitcoin?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] rounded-lg p-6 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-white rounded-full">
                <Calculator className="w-6 h-6 text-[#0E5CAD]" />
              </div>
              <h3 className="text-xl font-semibold">Calculate your Profits</h3>
            </div>
            <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Check Now →
            </button>
          </div>
          <div className="bg-gradient-to-br from-[#FF9865] to-[#EF3031] rounded-lg p-6 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-white rounded-full">
                <Calculator className="w-6 h-6 text-[#EF3031]" />
              </div>
              <h3 className="text-xl font-semibold">Calculate your tax liability</h3>
            </div>
            <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Check Now →
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

