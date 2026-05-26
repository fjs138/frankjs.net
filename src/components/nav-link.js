import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

export default function NavLink({ to, className, activeClassName, children }) {
  const { pathname } = useLocation()
  const normalized = pathname.replace(/\/$/, "") || "/"
  const target = to.replace(/\/$/, "") || "/"

  const isActive =
    target === "/"
      ? normalized === "/"
      : normalized === target || normalized.startsWith(`${target}/`)

  const combined = [className, isActive ? activeClassName : null]
    .filter(Boolean)
    .join(" ")

  return (
    <Link to={to} className={combined || undefined}>
      {children}
    </Link>
  )
}
