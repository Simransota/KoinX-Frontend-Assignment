"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TradingViewWidget from './tradingview-widget'
const data = [
  { date: "16 Dec", price: 42000 },
  { date: "17 Dec", price: 44000 },
  { date: "18 Dec", price: 45000 },
  { date: "19 Dec", price: 46500 },
  { date: "20 Dec", price: 45500 },
  { date: "21 Dec", price: 46000 },
  { date: "22 Dec", price: 46953 },
]

export function TradingViewChart() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Bitcoin Price Chart (USD)</h2>
      {/* <Tabs defaultValue="7d" className="mb-6">
        <TabsList>
          <TabsTrigger value="1h">1H</TabsTrigger>
          <TabsTrigger value="24h">24H</TabsTrigger>
          <TabsTrigger value="7d">7D</TabsTrigger>
          <TabsTrigger value="1m">1M</TabsTrigger>
          <TabsTrigger value="3m">3M</TabsTrigger>
          <TabsTrigger value="6m">6M</TabsTrigger>
          <TabsTrigger value="1y">1Y</TabsTrigger>
          <TabsTrigger value="all">ALL</TabsTrigger>
        </TabsList>
      </Tabs> */}
      {/* <ResponsiveContainer width="100%" height={400}> */}
        <TradingViewWidget/>
        {/* <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="#0052FE"
            strokeWidth={2}
            dot={false}
          />
        </LineChart> */}
      {/* </ResponsiveContainer> */}
    </div>
  )
}

