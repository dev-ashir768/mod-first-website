"use client"

import Image from "next/image"

export function NewsletterSection() {
  return (
    <section className="container py-8 md:py-12 lg:py-16">
      <div className="w-full rounded-[24px] md:rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center bg-linear-to-b from-[#D3F52E] via-[#e8fa85] to-white/90">
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black mb-4 text-center tracking-tight">
          Ready To Elevate Your Print Brand?
        </h2>
        <p className="text-[#464545] text-base md:text-lg text-center max-w-[775px] mb-8 leading-[1.6]">
          Join the Modfirst newsletter to receive exclusive discounts, design templates, and
          professional DTF printing guides directly in your inbox.
        </p>

        <form className="flex flex-row items-center gap-3 w-full max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Email"
            required
            className="flex-1 px-5 py-3 h-14 rounded-xl border border-[#848383] bg-white focus:outline-none focus:border-primary transition-all text-md text-muted-foreground"
          />
          <button
            type="submit"
            className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-xl transition-colors shrink-0"
          >
            <Image src="/images/icons/send.svg" alt="User" width={24} height={24} />
          </button>
        </form>
      </div>
    </section>
  )
}
