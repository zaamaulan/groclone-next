import React from 'react'
import { FeatureCard } from './feature-card'
import { Button } from './ui/button'
import { features } from '@/data/features'

export const Feature = () => {
  return (
    <section className="container mx-auto space-y-20 py-28">
      <h2 className="text-center text-[72px] font-bold">
        Simple yet <span className="text-primary">powerful</span> features
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-[22px]">
        <Button>Get started</Button>
        <Button variant={'outline'} className="border-secondary-foreground">
          See more features
        </Button>
      </div>
    </section>
  )
}
