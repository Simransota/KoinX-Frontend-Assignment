"use client"

import { useEffect, useState } from "react"
import { Bitcoin } from 'lucide-react'
import { Skeleton } from "@/components/ui/skeleton"

interface BitcoinPrice {
  bitcoin: {
    inr: number
    inr_24h_change: number
    usd: number
    usd_24h_change: number
  }
}

export function CryptoHeader() {
  const [priceData, setPriceData] = useState<BitcoinPrice | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch('/api/bitcoin-price')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        if (data.error) {
          throw new Error(data.error)
        }
        setPriceData(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred')
        console.error('Error fetching price data:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPrice()
    // Set up polling every minute
    const interval = setInterval(fetchPrice, 60000)
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2
    }).format(price)
  }

  const formatInrPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <Bitcoin className="w-8 h-8 text-[#F7931A]" />
        <h1 className="text-2xl font-semibold">Bitcoin</h1>
        <span className="text-gray-500">BTC</span>
        <span className="px-3 py-1 bg-gray-100 rounded text-sm">Rank #1</span>
      </div>
      <div className="flex items-baseline gap-8">
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-6 w-24" />
          </div>
        ) : error ? (
          <div className="text-red-500">Error: {error}</div>
        ) : priceData ? (
          <div>
            <div className="text-3xl font-semibold">
              {formatPrice(priceData.bitcoin.usd)}
            </div>
            <div className="text-gray-500">
              {formatInrPrice(priceData.bitcoin.inr)}
            </div>
          </div>
        ) : null}
        {priceData && (
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center px-2 py-1 rounded ${
              priceData.bitcoin.usd_24h_change >= 0 
                ? 'bg-[#EBF9F4] text-[#14B079]' 
                : 'bg-red-50 text-red-500'
            }`}>
              <span className="mr-1">
                {priceData.bitcoin.usd_24h_change >= 0 ? '▲' : '▼'}
              </span>
              {Math.abs(priceData.bitcoin.usd_24h_change).toFixed(2)}%
            </span>
            <span className="text-gray-500">(24H)</span>
          </div>
        )}
      </div>
    </div>
  )
}

