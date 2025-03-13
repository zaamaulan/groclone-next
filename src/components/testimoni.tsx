'use client'

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { testimonials } from '@/data/testimonials'

export const Testimoni = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = useCallback(() => {
    if (api) api.scrollPrev()
  }, [api])

  const scrollNext = useCallback(() => {
    if (api) api.scrollNext()
  }, [api])

  useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)

    return () => {
      api?.off('select', onSelect)
    }
  }, [api, onSelect])

  console.log(api?.canScrollNext())

  return (
    <section className="flex flex-col justify-center space-y-20 bg-[#111111] py-28">
      <div className="space-y-5 text-center text-white">
        <h2 className="text-[72px] font-bold">Our Customers Review</h2>
        <p className="mx-auto max-w-4xl text-[22px]">
          Groclone is trusted by fastest growth companies the focus on financial management Here`s what they have to say
          about us.
        </p>
      </div>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {testimonials.map((testimoni) => (
            <CarouselItem key={testimoni.id} className="basis-1/3">
              <Card className="rounded-[20px] border-none bg-[#222629] p-10">
                <CardContent className="space-y-11 p-0 text-white">
                  <p className="text-[30px]">{testimoni.content}</p>
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={'https://github.com/shadcn.png'}
                      alt="avatar"
                      width={60}
                      height={60}
                      className="aspect-square shrink-0 rounded-full"
                    />
                    <div>
                      <p className="text-[26px]">{testimoni.author}</p>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className="size-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex items-center justify-center gap-3.5">
        <Button
          onClick={scrollPrev}
          size={'icon'}
          className={cn(!canScrollPrev && 'bg-[#222629]')}
          disabled={!canScrollPrev}
        >
          <ArrowLeft className="size-6" />
        </Button>
        <Button
          onClick={scrollNext}
          size={'icon'}
          className={cn(!canScrollNext && 'bg-[#222629]')}
          disabled={!canScrollNext}
        >
          <ArrowRight className="size-6" />
        </Button>
      </div>
    </section>
  )
}
