import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CryptoOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <img src="/bitcoin-logo.png" alt="Bitcoin logo" className="w-8 h-8" />
          <span>Bitcoin</span>
          <span className="text-gray-500">BTC</span>
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">Rank #1</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-4">
          <span className="text-3xl font-bold">$46,953.04</span>
          <span className="text-green-500">2.51%</span>
          <span className="text-gray-500">(24H)</span>
        </div>
        <div className="text-gray-500">₹ 39,42,343</div>
      </CardContent>
    </Card>
  )
}

