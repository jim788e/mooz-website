'use client'

import Link from "next/link"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault()
        document.querySelector(href)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }}
    >
      {children}
    </Link>
  )
} 