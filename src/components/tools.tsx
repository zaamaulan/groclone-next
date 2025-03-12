import { Check } from "lucide-react"
import Image from "next/image"

const toolSections = [
  {
    title: "Advance Campaign Monitoring",
    heading: "Monitor marketing campaigns",
    description:
      "Stay ahead of the game. Monitor your marketing campaigns in real-time with our intuitive tools, and make data-driven decisions for optimal results.",
    image: "/tools/campaign.png",
    features: ["Realtime analytics", "Best campaign manager", "Detailed contact data"],
    reverse: false,
  },
  {
    title: "Detailed User Analytics",
    heading: "Have all customer data in one place",
    description:
      "Streamline your customer insights. Keep all your customer data in one place, and get a complete view of their behavior and preferences for personalized engagement.",
    image: "/tools/analytics.png",
    features: ["Advanced reports", "User path analytics", "Predictive user trends"],
    reverse: true,
  },
]

export const Tools = () => {
  return (
    <section className="py-28 container mx-auto space-y-[100px]">
      <div className="space-y-[30px] text-center">
        <h2 className="text-[72px] font-bold">All-in-one analytics tool</h2>
        <p className="text-[22px] max-w-4xl mx-auto">
          Maximize your decision-making capabilities with our powerful analytical tools. Harness the power of your data
          to drive growth and success.
        </p>
      </div>

      <div className="space-y-[150px]">
        {toolSections.map((section) => (
          <div
            key={section.title}
            className={`grid grid-cols-2 place-items-center gap-20 ${section.reverse ? "flex-row-reverse" : ""}`}
          >
            {!section.reverse && (
              <div className="relative w-full h-[700px]">
                <Image src={section.image} alt={section.title} className="object-contain" fill />
              </div>
            )}

            <div className="space-y-10">
              <p className="text-[#FC4B37] text-[22px]">{section.title}</p>
              <h3 className="text-[72px] font-bold leading-tight">{section.heading}</h3>
              <p className="text-[22px]">{section.description}</p>
              <ul className="flex flex-col gap-2">
                {section.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3.5">
                    <Check className="text-[#83B71B]" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {section.reverse && (
              <div className="relative w-full h-[700px]">
                <Image src={section.image} alt={section.title} className="object-contain" fill />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
