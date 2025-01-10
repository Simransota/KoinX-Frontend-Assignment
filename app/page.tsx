import { Breadcrumb } from "./components/breadcrumbs"
import { CryptoHeader } from "./components/crypto-header"
import { TradingViewChart } from "./components/trading-view-chart"
import { Performance } from "./components/performance"
import { Fundamentals } from "./components/fundamentals"
import { Sentiment } from "./components/sentiment"
import { About } from "./components/about"
import { GetStarted } from "./components/get-started"
import { TrendingCoins } from "./components/trending-coins"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HoldingBitcoin } from "./components/holding-bitcoin"
import { Tokenomics } from "./components/tokenomics"
import { Team } from "./components/team"
import { YouMayLike } from "./components/you-may-like"
import { TrendingCoinSection } from "./components/trending-coins-section"
import { Navbar } from "./components/navbar"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#EFF2F5]">
      <Navbar/>
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-4">
          <div className="lg:col-span-2 space-y-5">
            <CryptoHeader />
            <div className="bg-white rounded-lg p-6">
              <TradingViewChart />
            </div>
            <Tabs defaultValue="overview" className="bg-white rounded-lg">
              <TabsList className="p-4 border-b">
                <TabsTrigger value="overview" className="text-sm">Overview</TabsTrigger>
                <TabsTrigger value="fundamentals" className="text-sm">Fundamentals</TabsTrigger>
                <TabsTrigger value="news-insights" className="text-sm">News Insights</TabsTrigger>
                <TabsTrigger value="sentiments" className="text-sm">Sentiments</TabsTrigger>
                <TabsTrigger value="team" className="text-sm">Team</TabsTrigger>
                <TabsTrigger value="technicals" className="text-sm">Technicals</TabsTrigger>
                <TabsTrigger value="tokenomics" className="text-sm">Tokenomics</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="p-6 space-y-5">
                <Performance />
                <Fundamentals />
                <Sentiment />
                <About />
                <HoldingBitcoin />
                <Tokenomics />
                <Team />
                <YouMayLike/>
                <TrendingCoinSection/>
              </TabsContent>
            </Tabs>
          </div>
          <div className="space-y-5">
            <GetStarted />
            <TrendingCoins />
            
          </div>
        </div>
      </div>
    </div>
  )
}

