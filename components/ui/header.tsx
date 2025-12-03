import Link from "next/link"
import type { ReactNode } from "react"

import { Button } from "./button"

type HeaderProps = {
  cta?: ReactNode
}

const Header = ({ cta }: HeaderProps) => {
  const callToAction =
    cta ?? (
      <Button
        variant="default"
        size="sm"
        className="bg-mainPink hover:bg-darkPink rounded-xl py-4 px-4 text-sm"
      >
        Get Started
      </Button>
    )

  return (
    <header className="items-center w-full py-5 border-b border-black bg-gray-100 fixed inset-x-0 top-0 z-50">
      <nav className="flex h-[30px] w-full items-center justify-between px-32">
        <h1 className="font-mono font-bold text-4xl">Forum</h1>
        <div className="flex items-center gap-6 text-sm tracking-wide">
          <Link
            href="/posts/new"
            className="text-black transition hover:text-mainPink"
          >
            Write
          </Link>
          <Link
            href="/posts/new"
            className="text-black transition hover:text-mainPink"
          >
            Sign in
          </Link>
          {callToAction}
        </div>
      </nav>
    </header>
  )
}

export default Header
