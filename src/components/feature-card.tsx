import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

export const FeatureCard = ({ description, title, icon }: FeatureCardProps) => {
  return (
    <Card className="rounded-[20px] border-none bg-[#F4F4F4] p-10 shadow-none">
      <div className="bg-primary/12 grid size-20 place-items-center rounded-full">
        <Image src={icon} alt={`${title}-icon`} width={26} height={26} className="size-8" />
      </div>
      <CardHeader className="p-0">
        <CardTitle className="text-[30px] font-bold">{title}</CardTitle>
        <CardDescription className="text-[22px]">{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
