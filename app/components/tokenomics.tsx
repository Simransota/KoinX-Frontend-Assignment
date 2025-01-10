"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const data = [
  { name: "Crowdsale investors", value: 80 },
  { name: "Foundation", value: 20 },
]

const COLORS = ["#0082FF", "#FAA002"]

export function Tokenomics() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Tokenomics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <h3 className="text-xl font-semibold">Initial Distribution</h3>
        <div className="flex items-center gap-8">
          <div className="w-[200px] h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#0082FF]" />
              <span>Crowdsale investors: 80%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FAA002]" />
              <span>Foundation: 20%</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </CardContent>
    </Card>
  )
}

