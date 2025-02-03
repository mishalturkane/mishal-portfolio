"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className="text-center mt-6 w-full mx-auto">
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2 p-2 rounded-full justify-between sm:justify-end items-center">
        <div className="flex space-x-4">
          <Link href="/" className={pathname === "/" ? "underline" : "hover:underline"}>
            home
          </Link>
          <Link href="/blog" className={pathname === "/blog" ? "underline" : "hover:underline"}>
            blog
          </Link>
          <Link href="/gadgets" className={pathname === "/gadgets" ? "underline" : "hover:underline"}>
            gadgets
          </Link>
        </div>
        <button className="btn relative bg-green-500 text-black px-4 py-2 hover:text-gray-700 font-medium">
          <div className="absolute top-0 left-0 w-3 h-3 bg-red-500 rounded-full animate-blink"></div>
          Open to work
        </button>
      </div>
      <div className="flex space-x-6 mt-6 pt-2 justify-center sm:justify-end">
        <a href="https://github.com/mishalturkane" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://x.com/mishalturkane" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/mishalturkane/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:mishalturkane@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </div>
  )
}

