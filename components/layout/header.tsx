"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import SearchBar from "../shared/search-bar";
import Link from "next/link";
import { useState } from "react";
import { Sidebar } from "./sidebar";

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container h-20 flex items-center justify-between gap-4">
          {/* Left: Menu & Logo */}
          <div className="flex items-center gap-4">
            <Button size="icon-lg" variant="ghost" onClick={() => setIsSidebarOpen(true)}>
              <Image src="/images/icons/3-bars.svg" alt="3-bars" width={24} height={24} />
            </Button>
            <div className="relative w-32 h-8 lg:w-48 lg:h-11">
              <Link href="/">
                <Image
                  src="/images/branding/logo-dark.svg"
                  alt="Modfirst Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </Link>
            </div>
          </div>

          {/* Center: Search */}
          <div className="hidden md:flex flex-1 max-w-3xl px-4">
            <SearchBar />
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <a href="tel:+923123456789" className="hidden lg:flex items-center gap-2 hover:opacity-75 transition-opacity">
              <Image src="/images/icons/phone.svg" alt="Phone" width={20} height={20} />
              <span className="text-sm font-medium whitespace-nowrap">+92 3123456789</span>
            </a>

            <Button size="icon-lg" variant="ghost">
              <Image src="/images/icons/user.svg" alt="User" width={24} height={24} />
            </Button>

            <Button size="icon-lg" variant="ghost">
              <Link href="/cart">
                <Image src="/images/icons/cart.svg" alt="Cart" width={24} height={24} />
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden px-4 pb-4">
          <SearchBar />
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
