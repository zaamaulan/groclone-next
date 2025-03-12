import React from "react"
import { FeatureCard } from "./feature-card"
import { Button } from "./ui/button"
import { features } from "@/data/features"

export const Feature = () => {
  return (
    <section className="py-28 container mx-auto space-y-20">
      <h2 className="text-[72px] font-bold text-center">
        Simple yet <span className="text-primary">powerful</span> features
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
      <div className="flex items-center gap-[22px] justify-center">
        <Button>Get started</Button>
        <Button variant={"outline"} className="border-secondary-foreground">
          See more features
        </Button>
      </div>
    </section>
  )
}
