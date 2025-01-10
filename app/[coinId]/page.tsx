import { notFound } from 'next/navigation'
import { CoinDetails } from './coin-details'

async function getCoinData(coinId: string) {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
  if (!response.ok) {
    throw new Error('Failed to fetch coin data')
  }
  return response.json()
}

export default async function CoinPage({ params }: { params: { coinId: string } }) {
  try {
    const coinData = await getCoinData(params.coinId)
    return <CoinDetails coinData={coinData} />
  } catch (error) {
    notFound()
  }
}

