import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const teamMembers = [
  {
    name: "John Smith",
    designation: "Designation here",
    image: "/team/team1.png",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. ",
  },
  {
    name: "Elina Williams",
    designation: "Designation here",
    image: "/team/team2.png",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. ",
  },
  {
    name: "John Smith",
    designation: "Designation here",
    image: "/team/team3.png",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas.  ",
  },
]

export function Team() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Team</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
        </p>
        <div className="space-y-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#E8F4FD] rounded-lg p-6">
              <div className="flex gap-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={120}
                  className="rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-500 mb-2">{member.designation}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

