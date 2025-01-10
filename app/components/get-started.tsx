import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function GetStarted() {
  return (
    <Card className="bg-[#0052FE] text-white">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Get Started with KoinX for FREE</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-center">
          With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
        </p>
        <div className="flex justify-center">
          <Image
            src="/image.png"
            alt="Get Started"
            width={150}
            height={150}
            className="my-4"
          />
        </div>
        <Button className="w-full bg-white text-black hover:bg-gray-100" size="lg">
          Get Started for FREE →
        </Button>
      </CardContent>
    </Card>
  )
}

