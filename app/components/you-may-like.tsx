'use client'

import { useEffect, useState, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Triangle } from 'lucide-react'

interface TrendingCoin {
  item: {
    id: string
    name: string
    symbol: string
    small: string
    data: {
      price: string
      price_change_percentage_24h: {
        usd: number
      }
      sparkline: string
    }
  }
}

export function YouMayLike() {
  const [trendingCoins, setTrendingCoins] = useState<TrendingCoin[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending')
        if (!response.ok) throw new Error('Failed to fetch trending coins')
        const data = await response.json()
        setTrendingCoins(data.coins)
      } catch (err) {
        setError('Error fetching trending coins')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTrendingCoins()
  }, [])

  const formatPrice = (price: string) => {
    const numPrice = parseFloat(price)
    return numPrice < 1 ? `$${price}` : `$${numPrice.toFixed(2)}`
  }

  const formatPriceChange = (change: number) => {
    return change >= 0 ? `+${change.toFixed(2)}%` : `${change.toFixed(2)}%`
  }

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? trendingCoins.length - 1 : prevIndex - 1))
  }

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === trendingCoins.length - 1 ? 0 : prevIndex + 1))
  }

  useEffect(() => {
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.clientWidth
      carouselRef.current.style.transform = `translateX(-${carouselWidth * currentIndex}px)`
    }
  }, [currentIndex])

  const CoinCarousel = () => (
    <div className="relative w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-300"
      >
        {trendingCoins.map((coin) => (
          <div key={coin.item.id} className="w-[200px] flex-shrink-0">
            <div className="rounded-lg border p-3">
              <div className="flex items-center gap-2 mb-2">
                <div 
                  className="w-6 h-6 rounded-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${coin.item.small})` }}
                  role="img"
                  aria-label={`${coin.item.name} icon`}
                />
                <span className="font-medium">{coin.item.symbol.toUpperCase()}</span>
              </div>
              <div className={`text-sm mb-1 ${
                coin.item.data.price_change_percentage_24h.usd >= 0 
                  ? "text-[#14B079]" 
                  : "text-[#DC2626]"
              }`}>
                <span className="inline-flex items-center">
                  <Triangle className={`w-4 h-4 fill-current ${
                    coin.item.data.price_change_percentage_24h.usd >= 0 
                      ? "" 
                      : "transform rotate-180"
                  }`} />
                  {formatPriceChange(coin.item.data.price_change_percentage_24h.usd)}
                </span>
              </div>
              <div className="font-bold mb-2">
                {formatPrice(coin.item.data.price)}
              </div>
              <div 
                className="h-[60px] bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${coin.item.data.sparkline})` }}
                role="img"
                aria-label={`Price graph for ${coin.item.name}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Left and Right Arrows */}
      <button 
        onClick={handlePrevClick}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
        aria-label="Previous Coin"
      >
        &lt;
      </button>
      <button 
        onClick={handleNextClick}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
        aria-label="Next Coin"
      >
        &gt;
      </button>
    </div>
  )

  if (isLoading) {
    return <Card className="mt-8"><CardContent>Loading trending coins...</CardContent></Card>
  }

  if (error) {
    return <Card className="mt-8"><CardContent>{error}</CardContent></Card>
  }

  return (
    <>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>You May Also Like</CardTitle>
        </CardHeader>
        <CardContent>
          <CoinCarousel />
        </CardContent>
      </Card>

      {/* <Card className="mt-8">
        <CardHeader>
          <CardTitle>Trending Coins</CardTitle>
        </CardHeader>
        <CardContent>
          <CoinCarousel />
        </CardContent>
      </Card> */}
    </>
  )
}
