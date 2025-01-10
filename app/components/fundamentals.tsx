import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { InfoIcon as InfoCircle } from 'lucide-react'

export function Fundamentals() {
  const fundamentals = [
    { label: "Bitcoin Price", value: "$16,815.46" },
    { label: "24h Low / 24h High", value: "$16,382.07 / $16,874.12" },
    { label: "7d Low / 7d High", value: "$16,382.07 / $16,874.12" },
    { label: "Trading Volume", value: "$23,249,202,782" },
    { label: "Market Cap Rank", value: "#1" },
    { label: "Market Cap", value: "$323,507,290,047" },
    { label: "Market Cap Dominance", value: "38.343%" },
    { label: "Volume / Market Cap", value: "0.0718" },
    {
      label: "All-Time High",
      value: "$69,044.77 -75.6%",
      date: "Nov 10, 2021 (about 1 year)"
    },
    {
      label: "All-Time Low",
      value: "$67.81 24729.1%",
      date: "Jul 06, 2013 (over 9 years)"
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2">
        <CardTitle>Fundamentals</CardTitle>
        <InfoCircle className="w-4 h-4 text-gray-400" />
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
          {fundamentals.map((item, index) => (
            <div key={index} className="py-2 border-b last:border-b-0">
              <div className="flex justify-between">
                <span className="text-gray-500">{item.label}</span>
                <div className="text-right">
                  <div>{item.value}</div>
                  {item.date && <div className="text-sm text-gray-500">{item.date}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

