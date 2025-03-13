import { toolSections } from '@/data/tool-section'
import { Check } from 'lucide-react'
import Image from 'next/image'

export const Tools = () => {
  return (
    <section className="container mx-auto space-y-[100px] py-28">
      <div className="space-y-[30px] text-center">
        <h2 className="text-[72px] font-bold">All-in-one analytics tool</h2>
        <p className="mx-auto max-w-4xl text-[22px]">
          Maximize your decision-making capabilities with our powerful analytical tools. Harness the power of your data
          to drive growth and success.
        </p>
      </div>

      <div className="space-y-[150px]">
        {toolSections.map((section) => (
          <div
            key={section.title}
            className={`grid grid-cols-2 place-items-center gap-20 ${section.reverse ? 'flex-row-reverse' : ''}`}
          >
            {!section.reverse && (
              <div className="relative h-[700px] w-full">
                <Image src={section.image} alt={section.title} className="object-contain" fill />
              </div>
            )}

            <div className="space-y-10">
              <p className="text-primary text-[22px]">{section.title}</p>
              <h3 className="text-[72px] leading-tight font-bold">{section.heading}</h3>
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
              <div className="relative h-[700px] w-full">
                <Image src={section.image} alt={section.title} className="object-contain" fill />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
