import { footer } from '@/data/footer'
import Link from 'next/link'
import React from 'react'
import { Separator } from './ui/separator'

export const Footer = () => {
  return (
    <footer className="container mx-auto">
      <div className="flex justify-between gap-28 py-28">
        <div className="space-y-[30px]">
          <p className="text-primary text-[56px] leading-none font-bold">{footer.brand.name}</p>
          <p className="max-w-md text-[22px]">{footer.brand.tagline}</p>
        </div>
        <div>
          <ul className="grid grid-cols-4 gap-28">
            {footer.sections.map((section, index) => (
              <li key={section.title} className="space-y-4">
                <p className="text-xl font-bold">{section.title}</p>
                <ul className="space-y-4">
                  {section.links ? (
                    section.links?.map((link) => (
                      <li key={link}>
                        <Link href={'#'}>{link}</Link>
                      </li>
                    ))
                  ) : (
                    <li key={index} className="space-y-4">
                      <p>{section.contact.email}</p>
                      <p>{section.contact.phone}</p>
                      <ul className="flex items-center gap-3">
                        {section.contact.social.map((social) => (
                          <li key={social.platform}>
                            <social.icon />
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Separator />
      <div className="flex items-center justify-between py-11">
        <p>{footer.copyright.text}</p>
        <ul>{footer.copyright.policies.join(', ')}</ul>
      </div>
    </footer>
  )
}
