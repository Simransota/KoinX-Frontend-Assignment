'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Triangle } from 'lucide-react'

interface TrendingCoin {
  item: {
    id: string
    coin_id: number
    name: string
    symbol: string
    market_cap_rank: number
    thumb: string
    small: string
    large: string
    slug: string
    price_btc: number
    score: number
    data: {
      price_change_percentage_24h: {
        [key: string]: number
      }
    }
  }
}

export function TrendingCoins() {
  const [trendingCoins, setTrendingCoins] = useState<TrendingCoin[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending')
        if (!response.ok) {
          throw new Error('Failed to fetch trending coins')
        }
        const data = await response.json()
        setTrendingCoins(data.coins.slice(0, 3))
      } catch (err) {
        setError('Error fetching trending coins')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTrendingCoins()
  }, [])

  const formatPriceChange = (priceChange: number | undefined) => {
    if (priceChange === undefined) return 'N/A'
    return priceChange > 0 ? `+${priceChange.toFixed(2)}%` : `${priceChange.toFixed(2)}%`
  }

  if (isLoading) {
    return <Card><CardContent>Loading trending coins...</CardContent></Card>
  }

  if (error) {
    return <Card><CardContent>{error}</CardContent></Card>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Trending Coins (24h)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trendingCoins.map((coin) => (
            <div key={coin.item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Use a div with background-image instead of Next.js Image component */}
                <div 
                  className="w-6 h-6 rounded-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${coin.item.small})` }}
                  role="img"
                  aria-label={`${coin.item.name} icon`}
                />
                <span>{coin.item.name} ({coin.item.symbol.toUpperCase()})</span>
              </div>
              <div className={`flex items-center gap-1 px-2 py-1 rounded ${
                coin.item.data.price_change_percentage_24h?.usd >= 0 
                  ? 'text-[#14B079] bg-[#EBF9F4]' 
                  : 'text-[#DC2626] bg-[#FEE2E2]'
              }`}>
                <Triangle className={`w-4 h-4 fill-current ${
                  coin.item.data.price_change_percentage_24h?.usd >= 0 
                    ? '' 
                    : 'transform rotate-180'
                }`} />
                {formatPriceChange(coin.item.data.price_change_percentage_24h?.usd)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
