import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Performance() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Today's Low</span>
            <span>Today's High</span>
          </div>
          <div className="relative">
            <div className="h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 flex flex-col items-center">
              <div className="w-0 h-0 border-x-4 border-x-transparent border-b-[6px] border-b-gray-900" />
              <span className="text-sm font-medium">$48,637.83</span>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>52W Low</span>
            <span>52W High</span>
          </div>
          <div className="h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
        </div>
      </CardContent>
    </Card>
  )
}

