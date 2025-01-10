import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { InfoIcon as InfoCircle, Newspaper, TrendingUp } from 'lucide-react'

export function Sentiment() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle>Sentiment</CardTitle>
          <InfoCircle className="w-4 h-4 text-gray-400" />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="font-semibold">Key Events</h3>
            <InfoCircle className="w-4 h-4 text-gray-400" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-4 bg-[#E8F4FD] rounded-lg p-4">
              <div className="w-12 h-12 bg-[#0082FF] rounded-full flex items-center justify-center flex-shrink-0">
                <Newspaper className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-medium mb-2">Lorem ipsum dolor sit amet consectetur</h4>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-[#EBF9F4] rounded-lg p-4">
              <div className="w-12 h-12 bg-[#0FBA83] rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-medium mb-2">Lorem ipsum dolor sit amet consectetur</h4>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="font-semibold">Analyst Estimates</h3>
            <InfoCircle className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex gap-8 items-center">
            <div className="w-32 h-32 rounded-full bg-[#EBF9F4] flex items-center justify-center">
              <span className="text-[#0FBA83] text-4xl font-semibold">76%</span>
            </div>
            <div className="flex-1 space-y-2">
              {/* Buy */}
              <div className="flex items-center gap-8">
                <span className="w-8 text-sm text-gray-500">Buy</span>
                <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-800">
                  {/* //<div className="h-full bg-yellow-500 rounded-full" style={{ width: "35%" }} /> */}
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "41%" }} />
                </div>
                <span className="w-8 text-sm">76%</span>
              </div>
              {/* Hold */}
              <div className="flex items-center gap-8">
                <span className="w-8 text-sm text-gray-500">Hold</span>
                <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-800">
                  {/* <div className="h-full bg-yellow-500 rounded-full" style={{ width: "8%" }} /> */}
                  <div className="h-full bg-gray-500 rounded-full" style={{ width: "8%" }} />
                </div>
                <span className="w-8 text-sm">8%</span>
              </div>
              {/* Sell */}
              <div className="flex items-center gap-8">
                <span className="w-8 text-sm text-gray-500">Sell</span>
                <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-800">
                  {/* <div className="h-full bg-yellow-500 rounded-full" style={{ width: "16%" }} /> */}
                  <div className="h-full bg-red-500 rounded-full" style={{ width: "16%" }} />
                </div>
                <span className="w-8 text-sm">16%</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
