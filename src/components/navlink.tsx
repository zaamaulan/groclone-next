import Link from "next/link"

interface NavlinkProps {
  links: Navlink[]
}

export const Navlink = ({ links }: NavlinkProps) => (
  <>
    {links.map((link) => (
      <li key={link.text}>
        <Link href={link.href}>{link.text}</Link>
      </li>
    ))}
  </>
)
