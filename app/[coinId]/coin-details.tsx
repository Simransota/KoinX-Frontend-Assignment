'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CoinData {
  id: string
  symbol: string
  name: string
  image: {
    small: string
  }
  market_data: {
    current_price: {
      usd: number
    }
    price_change_percentage_24h: number
  }
}

declare global {
  interface Window {
    TradingView: any;
  }
}

export function CoinDetails({ coinData }: { coinData: CoinData }) {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/tv.js'
    script.async = true
    script.onload = () => {
      if (window.TradingView && chartRef.current) {
        new window.TradingView.widget({
          autosize: true,
          symbol: `BINANCE:${coinData.symbol.toUpperCase()}USDT`,
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_chart"
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [coinData.symbol])

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-4">
            <img src={coinData.image.small} alt={`${coinData.name} logo`} className="w-12 h-12" />
            <CardTitle>{coinData.name} ({coinData.symbol.toUpperCase()})</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold mb-2">
            ${coinData.market_data.current_price.usd.toLocaleString()}
          </div>
          <div className={`text-lg ${coinData.market_data.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {coinData.market_data.price_change_percentage_24h.toFixed(2)}%
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Price Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <div ref={chartRef} id="tradingview_chart" className="w-full h-[400px]" />
        </CardContent>
      </Card>
    </div>
  )
}

