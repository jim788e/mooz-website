"use client"

import type React from "react"

import Link from "next/link"
import type { LinkProps } from "next/link"

interface NavLinkProps extends Omit<LinkProps, "href"> {
  href: string
  children: React.ReactNode
  className?: string
}

export function NavLink({ href, children, className, ...props }: NavLinkProps) {
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
      {...props}
    >
      {children}
    </Link>
  )
}

